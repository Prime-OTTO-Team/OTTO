import React, { Component } from 'react';
import { connect } from 'react-redux';

class NdaPage extends Component {
    render() {
        return (
            <div className='container'>
                <p styles="text-align: center" align="center">
                    <b>
                        <span styles="font-size: 9pt">Non-Disclosure Agreement</span>
                    </b>
                </p>
                <p>
                    <span>
                        This NON-DISCLOSURE AGREEMENT (this “<b>Agreement</b>”) is made effective as of <b>Insert Date</b> by and
                        among OTTO LLC (together with its affiliates, the “<b>Disclosing Party</b>”) and <b>Insert Buyers’ Name</b> (together
                        with its affiliates, the “<b>Recipient</b>”). This Agreement creates no binding obligations on either party to
                        consummate any transaction. Recipient has expressed interest in an opportunity to purchase certain assets
                        and/or real estate referred to as <b>Insert Specific Property Name/Description</b> (the “<b>Opportunity</b>”). To
                        facilitate Recipient’s evaluation of the Opportunity, Disclosing Party may disclose nonpublic information
                        to Recipient. In consideration of the disclosure to Recipient by the Disclosing Party of nonpublic
                        information, Recipient agrees as follows:
                    </span>
                </p>
                <p>
                    <ul>
                        <li>
                            1. <b>Confidentiality</b>. Recipient acknowledges that it may receive from the Disclosing Part information
                            relating to the Opportunity. Such information may include, but is in no way limited to: financial
                            information, investors, investment strategies, investment terms, past or prospective investments,
                            business plans, business results, financial and operating plans, other proprietary information, and the
                            existence of business discussions among Recipient and Disclosing Party (collectively, the
                            “<b>Confidential Information</b>”). Recipient agrees that all such Confidential Information constitutes
                            private, privileged, valuable and proprietary assets of the Disclosing Party and that its misuse could
                            adversely affect the business and interests of the Disclosing Party.
                        </li>
                        <br/>
                        <li>
                            2. <b>Limited Permitted Use</b>. Recipient agrees that the Confidential Information is disclosed for
                            Recipient’s sole use with regard to evaluating the Opportunity and that conveyance of this material by
                            the Disclosing Party to the Recipient does not constitute a general release of, or license to use, such
                            information. Recipient agrees not to use the Confidential Information for its own benefit or for the use
                            or benefit of any other person or entity or for any reason other than evaluation of the Opportunity.
                            Further, Recipient acknowledges that the Confidential Information may reveal insight into unrelated
                            business opportunities belonging to the Disclosing Party and Recipient agrees to not misappropriate
                            any such opportunity. All Confidential Information shall be destroyed or returned to Disclosing Party
                            upon completion of the limited business purpose.
                        </li>
                        <br/>
                        <li>
                            3. <b>No Unauthorized Disclosures.</b> Recipient agrees to protect all Confidential Information and not to
                            communicate, duplicate or disclose any such information and materials to any person or entity except
                            internally to employees, legal counsel of Recipient, and other parties reasonably necessary to fully
                            evaluate the Opportunity.
                        </li>
                        <li>
                            4.<b>Non-Circumvention.</b> Recipient acknowledges that Disclosing Party has devoted substantial time and
                            resources to develop relationships in connection with the Opportunity (the “Relationships”) and that
                            Disclosing Party has performed a significant role in introducing the Opportunity to Recipient.
                            Recipient agrees that the Relationships constitute valuable, special and proprietary assets of Disclosing
                            Party and that circumvention or attempted circumvention of any Relationship would adversely affect
                            the business and interests of Disclosing Party. Recipient agrees not to circumvent Disclosing Party
                            with regard to any Relationships or the Opportunity.
                        </li>
                        <br/>
                        <li>
                            5. <b>Breach.</b> In the event of a breach or threatened breach by the Recipient of the provisions of this
                            Agreement, the Disclosing Party shall be entitled to injunctive relief and reasonable liquidated
                            damages. Nothing in this Agreement shall be construed as prohibiting the Disclosing Party from
                            pursuing any available remedy for breach. Recipient agrees to indemnify Disclosing Party for any
                            costs and legal expenses that Disclosing Party may incur in connection with enforcing this Agreement.
                        </li>
                        <br/>
                        <li>
                            6. <b>Governing Law.</b> The parties consent to jurisdiction and venue in the State of Minnesota. The laws of
                            Minnesota shall govern the terms of this Agreement without regard to conflict of laws considerations.
                        </li> 
                        <br/> 
                        <li>
                            7. <b>Authorization.</b> Each party represents that the signer of this Agreement on its behalf is duly authorized
                            to execute this Agreement and that the obligations of this Agreement will not create a conflict of
                            interest, violation of any laws, or breach of any existing contractual or legal obligations of such party.
                        </li>
                        <br/>
                        <li>
                            8. <b>Execution.</b> This Agreement may be executed by emails containing scanned signatures in one or more
                            counterparts, each of which shall be deemed an original but all of which shall constitute the same
                            instrument.
                        </li>
                        <br/>
                        <li>
                            9. <b>Modification.</b> Each party has had the opportunity to review this Agreement with legal counsel prior to
                            execution. The Agreement may be modified only by mutual written consent of both parties.
                        </li>
                    </ul>
                </p>  
                <p>
                    <span>
                        Accepted and agreed as of the date first written above.
                    </span>
                </p>            
                <p>
                    <span>
                        <b>RECIPIENT</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Disclosing Party</b>
                    </span>
                </p>
                <br/>
                <p>
                    <span>
                        <b>INSERT BUYERS NAME</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>OTTO, LLC</b>
                    </span>
                </p>
                <p>
                    <span>
                        Signatures go down here
                    </span>
                </p>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
});
export default connect(mapStateToProps)(NdaPage);