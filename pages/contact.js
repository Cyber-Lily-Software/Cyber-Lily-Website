import Head from "next/head";

import Navigation from "../components/Navigation";
import TextBanner from "../components/TextBanner";
import ChatDetailsContact from "../components/ChatDetailsContact";
import ContactForm from "../components/ContactForm";
import Footer from "../components/footer";

import { makeStyles, useTheme, withStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    form: {
        marginTop: '-30%',
        marginLeft: '60%',
        marginBottom: '5%',
    },
    details: {
        marginTop: '5%',
        marginLeft: '5%',
    },
}));

export default function Contact() {
    const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Contact Us - Cyber Lily Software - Zimbabwe Web Development Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <TextBanner headerText={'Ready to kick off a project? Looking for some advice?'}/>
      <div className={classes.details}>
      <ChatDetailsContact />
      </div>
      <div className={classes.form}>
      <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
