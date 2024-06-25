import { CSSInterface } from "../../utils/interfaces";

export const ImageUploaderContainerStyles: CSSInterface = {
  imageUploaderParentContainer: {
    width: "90%",
    display: "flex",
    gap: "2rem",
    margin: "auto",
    paddingTop: "50px",
  },
  uploaderContainer: {
    width: "100%",
    transition: "width 1s ease",
    height: "16rem",
  },
  uploaderContainerShrink: {
    width: "80%",
    transition: "width 1s ease",
  },
  fileListContainer: {
    width: "100%",
    height: "16rem",
    overflowY: "scroll",
    border: "1px solid rgb(234, 233, 233)",
    padding: "2px 10px 10px 10px",
    borderRadius: "10px",
    transition: "width 1s ease 0s",
  },
  buttonContainer: {
    marginTop: "30px",
  },
};
