import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 py-12 px-6 sm:px-12 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Logo Section */}
        <div className="flex flex-col items-start gap-6 max-w-[300px]">
          <Image
            src="/logo.svg"
            alt="Carhub logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-sm text-gray-600">
            Discover the best vehicles with Carhub. Join our community of car
            enthusiasts today.
          </p>
        </div>

        {/* Links Grid */}
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4 sm:gap-8 md:gap-12">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex flex-col gap-4">
              <h3 className="font-semibold text-gray-900 text-lg">
                {link.title}
              </h3>
              <ul className="space-y-3">
                {link.links.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.url}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright and Policies */}
      <div className="border-t border-gray-300 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Carhub. All rights reserved.
            </p>
          </div>
          <div className="order-1 md:order-2 flex gap-6">
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
