import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface IArticle {
    title: string,
    description: string,
    url: URL,
    imageUrl: string | StaticImport,
}