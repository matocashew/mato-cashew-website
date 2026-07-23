import {

  heading,

  divider,

  bullet,

  document

}
from "../lib/markdown-utils.js";

console.log(

  document(

    heading("Toolkit Test"),

    divider(),

    bullet([

      "Tree",

      "Audit",

      "SEO"

    ])

  )

);