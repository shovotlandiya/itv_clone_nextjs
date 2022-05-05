import React from "react";
import CallIcon from "@mui/icons-material/Call";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-slate-200">
      <div className="container mx-auto px-4 py-6 mt-8  flex-col sm:flex-row flex justify-between items-center">
        <p className="text-sky-900 text-xl mb-6 sm:mb-0 font-semibold" >We will happy, if you use our site</p>
        <div>
          <a href="tel:123-45-67" className="text-sky-900" type="number">
            <CallIcon className='mr-2 ' />
             (+998) 71 202 42 02
          </a>
          <br/>
          <div className="pt-2 text-sky-900 ml-6 sm:ml-0 mt-6 sm:mt-0 ">
          <Link href="https://www.instagram.com/accounts/login/?next=/itv.uz/">
            <a className="px-2 ">
              <InstagramIcon />
            </a>
          </Link>
          <Link href="https://www.facebook.com/int.television/?fref=ts">
            <a className="px-2">
              <FacebookIcon />
            </a>
          </Link>
          <Link href="https://t.me/itvuzofficial">
            <a className="px-2">
              <TelegramIcon />
            </a>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
