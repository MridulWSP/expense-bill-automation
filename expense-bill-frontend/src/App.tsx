import { ConfigProvider, Layout, theme } from "antd";
import "./App.css";
import { ImageUploaderContainer } from "./components/image-uploader/ImageUploaderContainer";
import { Navbar } from "./components/nav-bar/NavBar";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { InvoiceDataContainer } from "./components/invoice-data/InvoiceDataContainer";
import Theme from "./theme/Theme";
import { Provider } from "react-redux";
import store from "./store";
import { useState } from "react";

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [fileResult, setFileResult] = useState<any>();

  return (
    <Provider store={store}>
      <ConfigProvider theme={Theme}>
        <Layout className="App">
          <Header
            style={{
              background: Theme.token.colorPrimary,
            }}
          >
            <Navbar />
          </Header>
          <Content
            style={{
              padding: "0 4px",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              width: "95%",
              margin: "auto",
              marginTop: "50px",
              height: "100vh",
            }}
          >
            <ImageUploaderContainer setFileResult={setFileResult} />
            {fileResult && <InvoiceDataContainer invoicesData={fileResult} />}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            WSP Nordics © Created By Anand, Apurva, Rahul and Mridul
          </Footer>
        </Layout>
      </ConfigProvider>
    </Provider>
  );
};

export default App;
