import { MiniDrawerStyle } from "@/components/MiniDrawer/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";

export interface IMiniDrawerProps {
  //
}

export interface IMiniDrawerState {
  open: boolean;
  page: number;
}

export type MiniDrawerProps = IMiniDrawerProps & WithStyles<MiniDrawerStyle>;
