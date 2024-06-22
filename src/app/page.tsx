import BreadCrumbs from "@/components/breadcrumbs";
import DocNav from "@/components/doc-nav";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MarkdownContent from "@/components/markdown-content";
import PosterInfo from "@/components/poster-info";
import ScrollToTop from "@/components/scroll-to-top-btn";

export default function Home() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <main className="px-5 md:max-w-5xl mx-auto">
        <div className="px-5 w-full space-y-3 py-8">
          <BreadCrumbs />
          <div className="flex md:items-center gap-5 flex-col md:flex-row justify-between">
            <PosterInfo />
            <button className="w-max">See contributors</button>
          </div>
          <MarkdownContent />
          <DocNav />
          <br />
          <br />
          <Footer />
        </div>
      </main>
    </div>
  );
}
