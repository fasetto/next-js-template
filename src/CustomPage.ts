import React from "react";
import { NextPage } from "next";

export type CustomPage<Props = {}> = NextPage<Props> & {
    Layout?: React.FC;
}
