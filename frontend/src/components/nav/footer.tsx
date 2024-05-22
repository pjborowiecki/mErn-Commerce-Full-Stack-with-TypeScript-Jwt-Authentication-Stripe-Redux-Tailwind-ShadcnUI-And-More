import { footerLinks } from "@/data/nav-links"

import Balancer from "react-wrap-balancer"

import { NewsletterSignUpForm } from "@/components/forms/newsletter-signup-form"
import { ThemeSwitch } from "@/components/theme-switch"

export function Footer(): JSX.Element {
  return (
    <footer
      id="footer"
      aria-label="footer"
      className="grid gap-8 border-t bg-accent/40 pb-8 pt-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-8 sm:flex-row">
        <div className="grid flex-1 grid-cols-3 gap-4 md:gap-8">
          {footerLinks.map((link, index) => (
            <div
              key={index}
              className="space-y-1 text-center sm:text-start md:space-y-2 md:text-start"
            >
              <ul className="space-y-1 md:space-y-2">
                {link.subLinks.map((subLink, index) => (
                  <li key={index}>
                    <a
                      href={subLink.href}
                      target={subLink?.external ? "_blank" : undefined}
                      rel={subLink?.external ? "noreferrer" : undefined}
                      className="text-xs text-muted-foreground underline-offset-8 transition-all hover:underline hover:opacity-70 lg:text-sm"
                    >
                      {subLink.label}
                      <span className="sr-only">{subLink.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hidden flex-col gap-4 sm:flex sm:w-1/3 xl:pl-24">
          <p className="text-sm font-medium leading-5 2xl:text-base">
            <Balancer>
              Join our newsletter to never miss on deals and offers!
            </Balancer>
          </p>

          <NewsletterSignUpForm />
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8">
        <p className="text-sm text-muted-foreground xl:text-base">
          <Balancer>&copy; 2024 mErnCommerce. All rights reserved.</Balancer>
        </p>
        <div className="flex items-center justify-center">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
