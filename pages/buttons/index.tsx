// @ts-nocheck
import React from "react";
import SliderContainer from "../../src/components/Layout/SliderContainer";
import WithAuth from "../../hoc/withAuth";
import {wrapper} from "../../store/store";
import Payments from "../../src/components/Tables/Paymets";


const InvoicesPage = () => {
  return <WithAuth><SliderContainer title={"Buttons"}><Payments isButtons entity={"buttons"}/></SliderContainer></WithAuth>
}

export default wrapper.withRedux(InvoicesPage)