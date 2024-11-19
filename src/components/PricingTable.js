import React from 'react';
import { Table } from 'react-bootstrap';
import '../css/PricingTable.css'

const PricingTable = () => {
    return (
        <div>
            <div>
                <div className="section-title text-center">
                    <h2>ই সাইন API এর ফি বিবরণী </h2>
                </div>

                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th>সেবার নাম</th>
                        <th>প্যাকেজের নাম</th>
                        <th>প্যাকেজের বিবরণ</th>
                        <th>ফি/সাইন (ভ্যাট ও ট্যাক্স ব্যতীত)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td rowSpan="7">eSign API Service (for Government Organization)</td>
                        <td>Extra Small</td>
                        <td>Up to 5000 eSign/year</td>
                        <td>২০.০০</td>
                    </tr>
                    <tr>
                        <td>Small</td>
                        <td>5,001 to 10,000 eSign/year</td>
                        <td>১৭.০০</td>
                    </tr>
                    <tr>
                        <td>Medium</td>
                        <td>10,001 to 50,000 eSign/year</td>
                        <td>১২.০০</td>
                    </tr>
                    <tr>
                        <td>Regular</td>
                        <td>50,001 to 1,00,000 eSign/year</td>
                        <td>৮.০০</td>
                    </tr>
                    <tr>
                        <td>Large</td>
                        <td>1,00,001 to 5,00,000 eSign/year</td>
                        <td>৫.০০</td>
                    </tr>
                    <tr>
                        <td>x.Large</td>
                        <td>5,00,001 to 10,00,000 eSign/year</td>
                        <td>৩.০০</td>
                    </tr>
                    <tr>
                        <td>Open</td>
                        <td>Above 10,00,000 eSign/year</td>
                        <td>২.০০</td>
                    </tr>

                    <tr>
                        <td rowSpan="8">eSign API Service (for Private Organization)</td>
                        <td>Extra Small</td>
                        <td>Up to 5000 eSign/year</td>
                        <td>৩৫.০০</td>
                    </tr>
                    <tr>
                        <td>Small</td>
                        <td>5,001 to 10,000 eSign/year</td>
                        <td>২৫.০০</td>
                    </tr>
                    <tr>
                        <td>Medium</td>
                        <td>10,001 to 50,000 eSign/year</td>
                        <td>২০.০০</td>
                    </tr>
                    <tr>
                        <td>Regular</td>
                        <td>50,001 to 1,00,000 eSign/year</td>
                        <td>১৫.০০</td>
                    </tr>
                    <tr>
                        <td>Large</td>
                        <td>1,00,001 to 5,00,000 eSign/year</td>
                        <td>১০.০০</td>
                    </tr>
                    <tr>
                        <td>x.Large</td>
                        <td>5,00,001 to 10,00,000 eSign/year</td>
                        <td>৫.০০</td>
                    </tr>
                    <tr>
                        <td>Open</td>
                        <td>Above 10,00,000 eSign/year</td>
                        <td>২.৫০</td>
                    </tr>
                    </tbody>
                </Table>

            </div>

            <div>
                <div className="section-title text-center">
                    <h2>ই সাইন এপ্লিকেশন সেবার ফি বিবরণী </h2>
                </div>

                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th>সেবার নাম</th>
                        <th>প্যাকেজের নাম</th>
                        <th>প্যাকেজের বিবরণ</th>
                        <th>ফি/সাইন (ভ্যাট ও ট্যাক্স ব্যতীত)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td rowSpan="3">eSign Web (QuickSign) for Individual (Monthly Plan) </td>
                        <td>Small</td>
                        <td>10 eSign/month </td>
                        <td>২৪.০০</td>
                    </tr>
                    <tr>
                        <td>Medium</td>
                        <td>50 eSign/month </td>
                        <td>২০.০০</td>
                    </tr>
                    <tr>
                        <td>Large</td>
                        <td>100 eSign/month </td>
                        <td>১৬.০০</td>
                    </tr>
                    <tr>
                        <td rowSpan="3">eSign Web (QuickSign) for Organization (Monthly Plan) </td>
                        <td>Small</td>
                        <td>100 eSign/mont</td>
                        <td>১২.০০</td>
                    </tr>
                    <tr>
                        <td>Medium</td>
                        <td>500 eSign/mont</td>
                        <td>১০.০০</td>
                    </tr>
                    <tr>
                        <td>Large</td>
                        <td>1000 eSign/mont</td>
                        <td>৮.০০</td>
                    </tr>
                    <tr>
                        <td rowSpan="4">eSign Web (QuickSign) for Organization (Yearly Plan) </td>
                        <td>Small</td>
                        <td>500 eSign/mont</td>
                        <td>১৬.০০</td>
                    </tr>
                    <tr>
                        <td>Medium</td>
                        <td>1000 eSign/mont</td>
                        <td>১৪.০০</td>
                    </tr>
                    <tr>
                        <td>Regular</td>
                        <td>2500 eSign/mont</td>
                        <td>১২.০০</td>
                    </tr>
                    <tr>
                        <td>Large</td>
                        <td>5000 eSign/month</td>
                        <td>১০.০০</td>
                    </tr>

                    </tbody>
                </Table>

            </div>
        </div>


    );
}

export default PricingTable;
