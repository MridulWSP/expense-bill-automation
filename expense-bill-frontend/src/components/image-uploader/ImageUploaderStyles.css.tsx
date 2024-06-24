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
    transition: "width 0.5s , height 0.5s",
    height: "16rem",
  },
  fileListContainer: {
    width: "100%",
    height: "16rem",
    overflowY: "scroll",
    border: "1px solid #eae9e9",
    padding: "0 10px",
    borderRadius: "10px",
  },
};
