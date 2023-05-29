var pdfMake = require("pdfmake");
var fs = require("fs");
const { table } = require("console");
var fonts = {
  Roboto: {
    normal: "Roboto/Roboto-Regular.ttf",
    bold: "Roboto/Roboto-Medium.ttf",
    italics: "Roboto/Roboto-Italic.ttf",
    bolditalics: "Roboto/Roboto-MediumItalic.ttf",
  },
};

let padfmake = new pdfMake(fonts);
var docDefination = {
  pageSize: "A4",
  header: {
    image: "img/Logo-Base.png",
    width: 450,
    height: 100,
    alignment: "center",
    marginTop: 50,
  },
  footer: {
    text: [
      "Vidyasagar Principal K.M. Kundnani Chowk 124, Dinshaw Wachha Road, Churchgate, Mumbai - 400 020.\n",
      "Tel:91-22-22855726,66981000 Fax:91-22-22029092 Email:ofce@kccollege.edu.in WEB:www.kccollege.edu.in\n",
    ],
    fontSize: 10,
    alignment: "center",
  },
  content: [
    {
      columns: [
        { text: "Ref No:-TR./PG./171", fontSize: 9, marginTop: 120 },
        { text: "25th May, 2023", fontSize: 9, margin: [40, 120, 0, 0] },
      ],
    },
    {
      text: [{ text: "TRANSCRIPT CERTIFICATE", decoration: "underline" }],
      style: "header",
    },

    {
      text: [
        "This is certify that Mr. Sanket Pawar was a bonafide student of the college for the academic\n",
        " year 2017-2021. He has succcessfully completed Part I of Four years Integreted Degree Cource,\n",
        "Bachlor of Technology in Electronics and Telecommunication. His academic perfomance in the\n Semister I",
        "& II examinations is as given below:-",
      ],
      style: "paragraph",
    },
    {
      style: "ResultTable",
      table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 1,
        widths: [90, 170, 30, 30, 30, 30],
        body: [
          [
            {
              text: "Name of Examination & year of passing",
              fontSize: 10,
              bold: true,
              alignment: "center",
            },
            { text: "Subject", fontSize: 10, bold: true, alignment: "center" },
            { text: "Grades", fontSize: 10, bold: true, alignment: "center" },
            {
              text: "Grade Point(G)",
              fontSize: 10,
              bold: true,
              alignment: "center",
            },
            {
              text: "Credit Ponit(C)",
              fontSize: 10,
              bold: true,
              alignment: "center",
            },
            {
              text: "CG = C x G",
              fontSize: 10,
              bold: true,
              alignment: "center",
            },
          ],
          [
            {
              text: "MA\n Semister - I\n December, 2019\n SGPI=8.83\n 212/24\n Successful",
              fontSize: 9,
              rowSpan: 5,
              alignment: "center",
            },
            {
              text: "PERSONALITY PSYCHOLOGY",
              fontSize: 9,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "A+",
              fontSize: 9,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "9",
              fontSize: 9,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "4",
              fontSize: 9,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "36",
              fontSize: 9,
              alignment: "center",
              border: [true, true, true, false],
            },
          ],
          [
            "",
            {
              text: "RESEARCH METHODOLOGY",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "A+",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "9",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "4",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "36",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
          ],
          [
            "",
            {
              text: "STATISTICS FOR PSYCHOLOGY ",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "B+",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "7",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "4",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "28",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
          ],
          [
            "",
            {
              text: "PSYCHOLOGY OF COGN. & EMOTION",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "A",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "8",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "4",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "32",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
          ],
          [
            "",
            {
              text: "EXPERIMENTAL PSYCH - PRACT",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "O",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "10",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "8",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "80",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
          ],
          [
            " ",
            " ",
            " ",
            " ",
            { text: "24", fontSize: 9, alignment: "center" },
            { text: "212", fontSize: 9, alignment: "center" },
          ],
          [
            {
              text: "MA\n Semister - I\n December, 2019\n SGPI=8.00\n 212/24\n Successful",
              fontSize: 9,
              rowSpan: 5,
              alignment: "center",
            },
            {
              text: "EVOLUTIONARY PSYCHOLOGY",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
              border: [true, false, true, false],
            },
            {
              text: "A",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "8",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "4",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "32",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
          ],
          [
            " ",
            {
              text: "INTERVENTION SYSTEMS IN PSYCHO",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "A+",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "9",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "4",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "36",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
          ],
          [
            " ",
            {
              text: "MULTICULTURALISM THEORY & PRA",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "O",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "10",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "4",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "40",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
          ],
          [
            " ",
            {
              text: "POSITVE PSYCHOLOGY",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "A+",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "9",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "4",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "36",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
          ],
          [
            " ",
            {
              text: "PSYCHOLOGICAL TESTING & PSYC PR",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "B",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "6",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "8",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "48",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
          ],
          [
            " ",
            " ",
            " ",
            " ",
            { text: "24", fontSize: 9, alignment: "center" },
            { text: "192", fontSize: 9, alignment: "center" },
          ],
        ],
      },
    },
    {
      text: [{ text: "Total number of working weeks in a year: 32" }],
      style: "paragraph",
    },
    {
      text: [{ text: "Medium of Instruction: English" }],
      style: "paragraph",
    },
    {
      style: "GradeTable",
      table: {
        headerRows: 1,
        widths: [60, 30, 30, 30, 30, 30, 30, 30, 30],
        body: [
          [
            {
              text: "Grade -\n Grade Point ",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "O - 10",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "A+ - 9",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "A - 8",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "B+ - 7",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "B - 6",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "C - 5",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "D - 4",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "F ",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
          ],
          [
            {
              text: "Marks ",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "80 & above",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "70 to 79.99",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "60 to 69.99",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "55 to 59.99",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "50 to 54.99",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "45 to 49.99",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "40 to 44.99",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "Fail",
              fontSize: 9,
              alignment: "center",
            },
          ],
        ],
      },
    },
    {
      image: "img/signature.png",
      fit: [90, 90],
      alignment: "right",
      marginRight: 20,
    },
    {
      text: "Vice Principal",
      bold: true,
      margin: [400, 0, 0, 0],
    },
    {
      image: "img/Stamp.png",
      fit: [70, 70],
      alignment: "center",
    },
    { text: "", pageBreak: "after" },
    {
      columns: [
        { text: "Ref No:-TR./PG./171", fontSize: 9, marginTop: 120 },
        { text: "25th May, 2023", fontSize: 9, margin: [40, 120, 0, 0] },
      ],
    },
    {
      text: [{ text: "TRANSCRIPT CERTIFICATE", decoration: "underline" }],
      style: "header",
    },
    {
      text: [
        "This is certify that Mr. Sanket Pawar was a bonafide student of the college for the academic\n",
        " year 2017-2021. He has succcessfully completed Part II of Four years Integreted Degree Cource,\n",
        "Bachlor of Technology in Electronics and Telecommunication. His academic perfomance in the\n Semister III ",
        "& IV examinations is as given below:-",
      ],
      style: "paragraph",
    },
    {
      style: "ResultTable",
      table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 1,
        widths: [90, 170, 30, 30, 30, 30],
        body: [
          [
            {
              text: "Name of Examination & year of passing",
              fontSize: 10,
              bold: true,
              alignment: "center",
            },
            { text: "Subject", fontSize: 10, bold: true, alignment: "center" },
            { text: "Grades", fontSize: 10, bold: true, alignment: "center" },
            {
              text: "Grade Point(G)",
              fontSize: 10,
              bold: true,
              alignment: "center",
            },
            {
              text: "Credit Ponit(C)",
              fontSize: 10,
              bold: true,
              alignment: "center",
            },
            {
              text: "CG = C x G",
              fontSize: 10,
              bold: true,
              alignment: "center",
            },
          ],
          [
            {
              text: "MA\n Semister - I\n December, 2019\n SGPI=9.67\n 212/24\n Successful",
              fontSize: 9,
              rowSpan: 6,
              alignment: "center",
            },
            {
              text: "ASESSMENT IN CLINICAL PSY.",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            { text: "O", fontSize: 9, alignment: "center" },
            { text: "10", fontSize: 9, alignment: "center" },
            { text: "4", fontSize: 9, alignment: "center" },
            { text: "40", fontSize: 9, alignment: "center" },
          ],
          [
            "",
            {
              text: "PSYCHOPATHOLOGY ACROSS LIFESPAN",
              fontSize: 9,
              alignment: "center",
            },
            { text: "O", fontSize: 9, alignment: "center" },
            { text: "10", fontSize: 9, alignment: "center" },
            { text: "4", fontSize: 9, alignment: "center" },
            { text: "40", fontSize: 9, alignment: "center" },
          ],
          [
            "",
            {
              text: "PYCHOTHERAPY ",
              fontSize: 9,
              alignment: "center",
            },
            { text: "O", fontSize: 9, alignment: "center" },
            { text: "10", fontSize: 9, alignment: "center" },
            { text: "4", fontSize: 9, alignment: "center" },
            { text: "40", fontSize: 9, alignment: "center" },
          ],
          [
            "",
            {
              text: "ADV. SKILLS & PROC. OF COUN. PSYT",
              fontSize: 9,
              alignment: "center",
            },
            { text: "O", fontSize: 9, alignment: "center" },
            { text: "10", fontSize: 9, alignment: "center" },
            { text: "4", fontSize: 9, alignment: "center" },
            { text: "40", fontSize: 9, alignment: "center" },
          ],
          [
            "",
            {
              text: "PERSON DISO THEORY. ASS & INTER",
              fontSize: 9,
              alignment: "center",
            },
            { text: "O", fontSize: 9, alignment: "center" },
            { text: "10", fontSize: 9, alignment: "center" },
            { text: "4", fontSize: 9, alignment: "center" },
            { text: "40", fontSize: 9, alignment: "center" },
          ],
          [
            "",
            {
              text: "PRACTICUM IN CLINICA PSY.",
              fontSize: 9,
              alignment: "center",
            },
            { text: "A+", fontSize: 9, alignment: "center" },
            { text: "9", fontSize: 9, alignment: "center" },
            { text: "10", fontSize: 9, alignment: "center" },
            { text: "90", fontSize: 9, alignment: "center" },
          ],
          [
            " ",
            " ",
            " ",
            " ",
            { text: "30", fontSize: 9, alignment: "center" },
            { text: "290", fontSize: 9, alignment: "center" },
          ],
          [
            {
              text: "MA\n Semister - I\n December, 2019\n SGPI=10\n 212/24\n Successful",
              fontSize: 9,
              rowSpan: 5,
              alignment: "center",
            },
            {
              text: "CHANGE MANAGEMENT",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
              border: [true, false, true, false],
            },
            {
              text: "O",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "10",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "6",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "60",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
          ],
          [
            " ",
            {
              text: "APPL. OF NEURO. FR HEALTH MNGT",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "O",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "10",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "6",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "60",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
          ],
          [
            " ",
            {
              text: "PROJECT",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "O",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "10",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "10",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
            {
              text: "10",
              fontSize: 9,
              alignment: "center",
              border: [true, false, true, false],
            },
          ],
          [
            { text: " ", border: [true, false, true, false] },
            { text: " ", border: [true, false, true, false] },
            { text: " ", border: [true, false, true, false] },
            { text: " ", border: [true, false, true, false] },
            { text: " ", border: [true, false, true, false] },
            { text: " ", border: [true, false, true, false] },
          ],
          [
            " ",
            " ",
            " ",
            " ",
            { text: "22", fontSize: 9, alignment: "center" },
            { text: "220", fontSize: 9, alignment: "center" },
          ],
        ],
      },
    },
    {
      text: [{ text: "CGPI : 9.14" }],
      style: "paragraph",
    },
    {
      text: [{ text: "Total number of working weeks in a year: 32" }],
      style: "paragraph",
    },
    {
      text: [{ text: "Medium of Instruction: English" }],
      style: "paragraph",
    },
    {
      style: "GradeTable",
      table: {
        headerRows: 1,
        widths: [60, 30, 30, 30, 30, 30, 30, 30, 30],
        body: [
          [
            {
              text: "Grade -\n Grade Point ",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "O - 10",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "A+ - 9",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "A - 8",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "B+ - 7",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "B - 6",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "C - 5",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "D - 4",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
            {
              text: "F ",
              fontSize: 10,
              alignment: "center",
              bold: true,
            },
          ],
          [
            {
              text: "Marks ",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "80 & above",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "70 to 79.99",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "60 to 69.99",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "55 to 59.99",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "50 to 54.99",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "45 to 49.99",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "40 to 44.99",
              fontSize: 9,
              alignment: "center",
            },
            {
              text: "Fail",
              fontSize: 9,
              alignment: "center",
            },
          ],
        ],
      },
    },
    {
      image: "img/signature.png",
      fit: [90, 90],
      alignment: "right",
      marginRight: 20,
    },
    {
      text: "Vice Principal",
      bold: true,
      margin: [400, 0, 0, 0],
    },
    {
      image: "img/Stamp.png",
      fit: [70, 70],
      alignment: "center",
    },
  ],
  styles: {
    header: {
      fontSize: 14,
      bold: true,
      margin: [120, 10, 0, 0],
      font: "Roboto",
    },
    paragraph: { fontSize: 9, marginTop: 10, font: "Roboto" },
    ResultTable: { margin: [0, 10, 0, 10] },
    GradeTable: { margin: [90, 10, 0, 0] },
  },
};

let pdfDoc = padfmake.createPdfKitDocument(docDefination, {});
pdfDoc.pipe(fs.createWriteStream("pdf/test.pdf"));
pdfDoc.end();
