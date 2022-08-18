import { createFeatureSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { AuthStateInterface } from "src/app/shared/types/authState.interface";

export const authFeatureSelector = createFeatureSelector<
    AppStateInterface,
    AuthStateInterface>('auth')