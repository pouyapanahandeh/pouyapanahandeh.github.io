import { resumeData } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t py-12 px-4 text-center text-sm text-muted-foreground">
      <div className="container mx-auto">
        <p>
          © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
        </p>
        <p className="mt-2 text-xs">
          Built with Next.js, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
