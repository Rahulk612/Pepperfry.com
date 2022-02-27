import React from "react";

import './CartFooter.css'

export const CartFooter = () => {
    return (
      <div id="Cartfooter">
        <div id="footer1">
          <div id="f1" class="footer-header-space">
            WE ACCEPT
          </div>
          <div id="footer11">
            <div id="visa">
              <img
                class="footer_img11"
                src="https://ii2.pepperfry.com/images/new-visa-logo.png"
                alt=""
              />
            </div>

            <div id="maestro">
              <img
                class="footer_img"
                src="https://ii2.pepperfry.com/images/800-px-maestro-logosvg.png"
                alt=""
              />
            </div>

            <div id="american">
              <img
                class="footer_img"
                src="https://ii2.pepperfry.com/images/american-express-icon.png"
                alt=""
              />
            </div>

            <div id="dc">
              <img
                class="footer_img12"
                src="https://ii2.pepperfry.com/images/d-i-n-e-r-s-c-a-r-d-1.png"
                alt=""
              />
            </div>

            <div id="rupay">
              <img
                class="footer_img13"
                src="https://ii2.pepperfry.com/images/220-px-ru-paysvg.png"
                alt=""
              />
            </div>

            <div id="mastercard">
              <img
                class="footer_img"
                src="https://ii2.pepperfry.com/images/mastercard-logo-png.png"
                alt=""
              />
            </div>

            <div id="wallet">
              <div>
                <img
                  class="footer_img15"
                  src="https://ii2.pepperfry.com/images/982-wallet.png"
                  alt=""
                />
              </div>
              <div class="f11">Wallet</div>
            </div>

            <div id="netbanking">
              <div>
                <img
                  class="footer_img14"
                  src="https://ii2.pepperfry.com/images/985-netbanking.png"
                  alt=""
                />
              </div>
              <div class="f112">Internet banking</div>
            </div>
          </div>
        </div>
        <div id="footer2">
          <div id="f2" class="footer-header-space">
            BUY SAFE, PAY EASY
          </div>
          <div id="foot2">
            <div id="f21">
              <img
                alt="imgt"
                class="footer_img1"
                src="https://ii1.pepperfry.com/images/svg/calendar-1.svg"
              />
            </div>
            <div id="f22">
              <span class="f22bold">No Cost EMIs: </span>Now pay in easy
              installments at no additional cost
            </div>
          </div>
        </div>
        <div id="footer3">
          <div id="f3" class="footer-header-space">
            100% SAFE & SECURE
          </div>
          <div id="foot3">
            <div id="f31">
              <img
                class="footer_img31"
                src="https://ii2.pepperfry.com/images/download-1.png"
                alt=""
              />
            </div>
            <div id="f32">
              <img
                class="footer_img32"
                src="https://ii2.pepperfry.com/images/p-c-i-d-s-s.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div id="footer4">
          <p>Copyright 2021 Pepperfry.com All rights Reserved</p>
        </div>
      </div>
    );
}