import Link from "next/link";

import ServiceCard from "../components/ServiceCard";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down(769)]: {
      marginLeft: "0% !important",
      marginRight: "0% !important",
      maxWidth: "100%",
    },
    [theme.breakpoints.up(1026)]: {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    },
  },
  serviceItem: {
    flex: "50%",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    width: "33%",
    paddingBottom: "1rem",
    marginLeft: "auto",
    marginRight: "auto",

    [theme.breakpoints.down(420)]: {
      minWidth: "100% !important",
    },
    [theme.breakpoints.down(769)]: {
      flex: "50% !important",
      minWidth: "50%",
    },
    [theme.breakpoints.down(1025)]: {
      align: "center",
    },
    [theme.breakpoints.up(1026)]: {
      maxWidth: "33%",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
}));

const services = [
  {
    serviceName: "Website Design & Development",
    imgUrl: "./Frame.png",
    serviceUrl: "/services/consolidated-load",
    serviceIcon1: "./globe.png",
    serviceIcon2: "./globe@2x.png",
    serviceIcon3: "./globe@3x.png",
    shortDesc:
      "We design and develop custom websites from scratch, tailored specifically to your business’s needs. We pride ourselves on never using any templates for the design of our websites. We organize hosting for your websites through Amazon Web Services.",
  },
  {
    serviceName: "Web Application Design & Development",
    imgUrl: "./Frame.png",
    serviceUrl: "/services/full-load",
    serviceIcon1: "./iphone_portrait.png",
    serviceIcon2: "./iphone_portrait@2x.png",
    serviceIcon3: "././iphone_portrait@3x.png",
    shortDesc:
      "We design and develop scalable, enterprise grade web applications that suit your user’s and business’s needs. We organize hosting for your web applications through Amazon Web Services. Whatever solution works best for your needs, we will find.",
  },
  {
    serviceName: "Custom Software Development",
    imgUrl: "./Frame.png",
    serviceUrl: "/services/clearing",
    serviceIcon1: "./code.png",
    serviceIcon2: "./code@2x.png",
    serviceIcon3: "./code@3x.png",
    shortDesc:
      "Our team of developers and designers can build custom software, tailored to your business’s needs. Our solutions are built specific to your user’s and business’s needs.",
  },
];

export default function HomeServiceCards(props) {
  const classes = useStyles();
  const theme = useTheme();

  const mobileBreakpoint = useMediaQuery(theme.breakpoints.down(1025));

  return (
    <div className={classes.root}>
      {services.map((service) => {
        if (mobileBreakpoint) {
          return (
            <div className={classes.serviceItem}>
              <ServiceCard
                serviceName={service.serviceName}
                serviceImage={service.imgUrl}
                serviceIcon={service.serviceIcon}
                shortDesc={service.shortDesc}
                serviceUrl={service.serviceUrl}
                serviceIcon1={service.serviceIcon1}
                serviceIcon2={service.serviceIcon2}
                serviceIcon3={service.serviceIcon3}
              />
            </div>
          );
        } else {
          return (
            <Link href={service.serviceUrl} key={service.serviceName}>
              <div className={classes.serviceItem}>
                <ServiceCard
                  serviceName={service.serviceName}
                  serviceImage={service.imgUrl}
                  serviceIcon1={service.serviceIcon1}
                  serviceIcon2={service.serviceIcon2}
                  serviceIcon3={service.serviceIcon3}
                  shortDesc={service.shortDesc}
                />
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
}
