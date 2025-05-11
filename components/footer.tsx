import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiLinkedin, SiX } from "react-icons/si";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full border-t bg-card/50">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/denkilab-logo.webp" className="size-8" alt="Logo" />
              <span className="font-heading font-bold text-xl">DenkiLab</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              {t("description")}
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <SiLinkedin className="size-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <SiX className="size-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-lg">{t("links.title")}</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/#services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("links.services")}
              </Link>
              <Link
                href="/#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("links.about")}
              </Link>
              <Link
                href="/#portfolio"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("links.contact")}
              </Link>
            </nav>
          </div>

          {/* <div className="space-y-4">
            <h3 className="font-medium text-lg">Subscribe</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Email address"
                className="max-w-lg flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </div>
          </div> */}
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DenkiLab. {t("copyright")}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("privacy")}
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
