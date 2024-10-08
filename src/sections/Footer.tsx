import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
const footerLink = [
  { title: "Facebook", href: "https://facebook.com/srmeraj1" },
  { title: "Twitter", href: "https://x.com/Srm_siyam" },
  { title: "Instagram", href: "https://instagram.com/srmeraj1" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/srmeraj/" },
];
export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute -z-10 h-[300px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">©️ 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLink.map((link) => (
              <a
                className="inline-flex items-center gap-1.5"
                href={link.href}
                key={link.title}
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
