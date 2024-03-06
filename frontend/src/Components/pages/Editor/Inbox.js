import React, { useState } from 'react'
import classes from './Inbox.module.css'
import { Link } from 'react-router-dom'

export default function Inbox() {
  const [show, setShow] = useState(false)


  return (

    <div style={{ display: 'flex' }}>
      <div className={classes.leftmain}>

        <h1 style={{ display: 'flex', justifyContent: 'center' }}>Gmail</h1>

        <div className={classes.leftUpperPart}>
          <div id={classes['compose']}>
            <img src="	https://www.gstatic.com/images/icons/material/system_gm/1x/create_black_24dp.png" alt="img" />
            <Link to='/home' style={{ textDecoration: 'none' }}><h6>Compose</h6></Link>
          </div>
        </div>
        <div>

          <div className={classes.leftLowerMiddel}></div>

          <div className={classes.leftLowerPart}>
            <div className={classes.itemComp}>
              <img src="	https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/inbox_baseline_nv700_20dp.png" alt="." />
              Inbox
            </div>

            <div className={classes.itemComp}>
              <img src="	https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/star_baseline_nv700_20dp.png" alt="." />
              Starred
            </div>

            <div className={classes.itemComp}>
              <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/schedule_baseline_nv700_20dp.png" alt="." />
              Snoozed
            </div>

            <div className={classes.itemComp}>
              <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/send_baseline_nv700_20dp.png" alt="." />
              Sent
            </div>

            <div className={classes.itemComp}>
              <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/draft_fill_baseline_p900_20dp.png" alt="." />
              Drafts
            </div>

            <div className={classes.itemComp}>
              <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_more_baseline_nv700_20dp.png" alt="." />
              More
            </div>
          </div>
        </div>
        <div>
          <h4>Lables</h4>
        </div>
      </div >

      <div className={classes.rightMain}>

        <div className={classes.rightTopBody}>
          <input type="text" />
        </div>

        <div className={classes.rightBody}>

          <div className={classes.rightBodyHead}>
            <div className={classes.rightBodyHeadItems}>
              <div className={classes.items}>
                From
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_more_baseline_nv700_20dp.png" alt="." />
              </div>
              <div className={classes.items}>
                Any Time
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_more_baseline_nv700_20dp.png" alt="." />
              </div>
              <div className={classes.items}>
                Has attechment
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_more_baseline_nv700_20dp.png" alt="." />
              </div>
              <div className={classes.items}>
                Exclude calender updates
              </div>
              <div className={classes.items}>
                to
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_more_baseline_nv700_20dp.png" alt="." />
              </div>
              <div className={classes.items}>
                Exclude Social
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/expand_more_baseline_nv700_20dp.png" alt="." />
              </div>
              <div>
                <Link to='/home' style={{ textDecoration: 'none', margin: '0.4rem' }}>Adv.Search </Link>
              </div>
            </div>
          </div>

          <div className={classes.centerNav}>
            <input type="checkbox" name="allCheck" id="ForAllCheck" />
          </div>


          <div className={classes.mainContentBox}>

            <div className={classes["mailCollections"]}>

              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
              </div>

              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
              </div>

              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>

              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>
              <div className={classes.mails}>
                <input type="checkbox" name="checkOne" />
                <div className={classes.senderNameTag}>
                  snder Name here
                </div>
                <div className={classes.emailData}>
                  New jobs similar to Back End Developer( Product Development) at Godrej Capital
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "7px",
                }} />
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
