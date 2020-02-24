import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
    palette,
    typography,
    overrides
})

export default theme