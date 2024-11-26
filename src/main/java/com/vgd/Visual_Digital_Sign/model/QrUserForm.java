package com.vgd.Visual_Digital_Sign.model;

import lombok.Data;

@Data
public class QrUserForm {
    private String issuing_Country;
    private String documentIssueDate;
    private String signingCertificate;
    private String sealType;
    private String mrz1stLine;
    private String mrz2ndLine;
    private String passportNumber;
    private String image;

}
