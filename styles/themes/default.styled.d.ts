// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      secondaryBg: string;
      fontcolor: string;
      fontprimary: string;
      fontdark: string;
      fonttitle: string;
      textInput: string;
      borderprimary: string;
      bordersecondary: string;
      danger: string;
      headingInfo: string;
      white: string;
      black: string;
      pink: string;
      primaryButton: string;
      primaryButtonText: string;
      primaryButtonOutline: string;
      primaryHover:string;
      secondaryButton: string;
      gradientButton: string;
      selectBg: string;
      coolGrey: string;
      borderColor: string;
      optionActive: string;
      footerLinks: string;
      filterColor: string;
      filterCardShadow: string;
      frameBorderColor: string;
      cardLayoutBg: string;
    };

    fonts: Array<string>;
    fontSizes: {
      xsm: string;
      sm: string;
      md: string;
      lg: string;
    };
    buttonSizes: {
      [sm: string]: string;
      [md: string]: string;
      [lg: string]: string;
    };
    device: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
      desktopL: string;
    };
  }
}
