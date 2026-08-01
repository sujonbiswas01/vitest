import {vi,it,expect} from "vitest"
import { readerTitle } from "./dom";
import path from 'path'
import fs from 'fs'
import {JSDOM} from 'jsdom'

const htmlPath=path.join(__dirname,"index.html")
const htmlContent=fs.readFileSync(htmlPath,"utf-8")

const dom=new JSDOM(htmlContent)
const document=dom.window.document;

// stubbing the global document with the custom document
vi.stubGlobal("document",document)

it("should render the title",()=>{
    readerTitle()

    const titleEl=document.getElementById('title')
    const titlePara=titleEl.firstElementChild;
    expect(titlePara).not.toBeNull()
})