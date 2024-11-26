package com.vgd.Visual_Digital_Sign.controller;

import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.layout.element.Image;
import com.vgd.Visual_Digital_Sign.model.QrUserForm;
import com.vgd.Visual_Digital_Sign.model.UserForm;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.util.Base64;

@Controller
public class FormController {

    @GetMapping("/form")
    public String showForm(Model model) {
        model.addAttribute("userForm", new UserForm()); // Add an empty form model
        return "form"; // Returns the form.html template
    }

    @GetMapping("/qrform")
    public String showQrForm(Model model) {
        model.addAttribute("qrUserForm", new QrUserForm()); // Add an empty form model
        return "qrform"; // Returns the form.html template
    }

    @PostMapping("/submit")
    public ResponseEntity<byte[]> handleFormSubmission(@ModelAttribute UserForm userForm) {
        try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            // Create the PDF in memory
            PdfWriter writer = new PdfWriter(baos);
            PdfDocument pdfDocument = new PdfDocument(writer);
            Document document = new Document(pdfDocument);

            document.add(new Paragraph("Form Submission Details:"));
            document.add(new Paragraph("Name: " + userForm.getName()));
            document.add(new Paragraph("Email: " + userForm.getEmail()));
            document.add(new Paragraph("Message: " + userForm.getMessage()));

            document.close();

            // Convert PDF to a byte array
            byte[] pdfBytes = baos.toByteArray();

            // Prepare HTTP response headers
            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=form-submission.pdf");
            headers.add(HttpHeaders.CONTENT_TYPE, "application/pdf");

            return new ResponseEntity<>(pdfBytes, headers, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/submitQr")
    public ResponseEntity<byte[]> handleFormSubmission(@ModelAttribute QrUserForm qrUserForm) {
        try (ByteArrayOutputStream baosQr = new ByteArrayOutputStream()) {
            // Create the PDF in memory
            PdfWriter writerQr = new PdfWriter(baosQr);
            PdfDocument pdfDocumentQr = new PdfDocument(writerQr);
            Document documentQr = new Document(pdfDocumentQr);

            // Add text content to the PDF
            documentQr.add(new Paragraph("Form Submission Details:"));
            documentQr.add(new Paragraph("Issuing Country: " + qrUserForm.getIssuing_Country()));
            documentQr.add(new Paragraph("Issuing Date: " + qrUserForm.getDocumentIssueDate()));
            documentQr.add(new Paragraph("Seal Type: " + qrUserForm.getSealType()));

            // Add QR image to the PDF
            String qrImageBase64 = qrUserForm.getImage();
            System.out.println("Received QR Image (Base64): " + qrImageBase64);// Assuming Base64 string of the QR image is stored here
            if (qrImageBase64 != null && !qrImageBase64.isEmpty()) {
                try {
                    // Decode the Base64 image string
                    String base64Image = qrImageBase64.split(",")[1]; // Remove data URI prefix if present
                    byte[] imageBytes = Base64.getDecoder().decode(base64Image);

                    // Create ImageData and add to the PDF
                    ImageData imageDataQr = ImageDataFactory.create(imageBytes);
                    Image qrImage = new Image(imageDataQr);
                    qrImage.setAutoScale(true); // Automatically scale the image
                    documentQr.add(new Paragraph("QR Code:"));
                    documentQr.add(qrImage); // Add the image to the PDF
                } catch (Exception e) {
                    documentQr.add(new Paragraph("Failed to add QR image to the PDF."));
                    e.printStackTrace();
                }
            } else {
                documentQr.add(new Paragraph("No QR image provided."));
            }

            documentQr.add(new Paragraph("MRZ Line 1: " + qrUserForm.getMrz1stLine()));
            documentQr.add(new Paragraph("MRZ Line 2: " + qrUserForm.getMrz2ndLine()));
            documentQr.add(new Paragraph("Passport Number: " + qrUserForm.getPassportNumber()));
            documentQr.add(new Paragraph("Signing Certificate: " + qrUserForm.getSigningCertificate()));

            documentQr.close();

            // Convert PDF to a byte array
            byte[] pdfBytes = baosQr.toByteArray();

            // Prepare HTTP response headers
            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=form-submission.pdf");
            headers.add(HttpHeaders.CONTENT_TYPE, "application/pdf");

            return new ResponseEntity<>(pdfBytes, headers, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}