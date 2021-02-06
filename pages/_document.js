import Document, { Html, Head, Main, NextScript } from 'next/document'


function event(e) {
    return () => console.log(e);
};


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    // document.addEventListener("scroll", () => {
      // console.log("scroll");
    // })
    return (
      <Html lang="ru" onClick={event("click_html")} onScroll={event("scroll_html")}>
        <Head />
        <body onClick={event("click_body")} onScroll={event("scroll_body")}>
          <Main onClick={event("click_main")} onScroll={event("scroll_main")}/>
          <NextScript onClick={event("click_NextScript")} onScroll={event("scroll_NextScript")} />          
        </body>
      </Html>
    )
  }
}

export default MyDocument