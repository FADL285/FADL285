#!/usr/bin/env node

import boxen from "boxen"
import chalk from "chalk"

const NAME = "Mohamed Fadl"

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "#064f8d",
  title: NAME,
  titleAlignment: "center"
}

const intro = chalk.white(`${chalk.bold(`Hi 👋, I'm ${chalk.underline(NAME)}`)}.

A software engineer specializing in web development.
Focused on crafting exceptional digital experiences.

Find me on the web:

`)

const infoData = {
  username: "@FADL285",
  work: "Software Engineer at CyberDefenders 🛡️",
  linkedin: "FADL285",
  github: "FADL285",
  twitter: "FADL285",
  web: "https://fadl.info",
  email: "Mohamed@Fadl.info",
  npx: "npx fadl"
}

const labels = {
  username: "  Username:  ",
  work: "  Work:  ",
  twitter: "  X [Twitter]:  ",
  github: "  GitHub:  ",
  linkedin: "  LinkedIn:  ",
  web: "  Web:  ",
  email: "  Email:  ",
  npx: "  Card:  "
}

// Calculate the maximum length of the labels and values for dynamic centering
const labelMaxLength = Math.max(
  ...Object.keys(labels).map((label) => labels[label].length)
)

// helper function to pad the string with spaces
const padLabel = (label) => label.padEnd(labelMaxLength + 2)

const formattedData = [
  {
    label: chalk.hex("#ffffff").bgHex("#064f8d")(padLabel(labels.username)),
    value: chalk.white(infoData.username)
  },
  {
    label: chalk.hex("#ffffff").bgHex("#2457FF")(padLabel(labels.work)),
    value: chalk.white(infoData.work)
  },
  {
    label: chalk.hex("#ffffff").bgHex("#0077B5")(padLabel(labels.linkedin)),
    value:
      chalk.gray("https://linkedin.com/in/") + chalk.white(infoData.linkedin)
  },
  {
    label: chalk.hex("#ffffff").bgHex("#171515")(padLabel(labels.github)),
    value: chalk.gray("https://github.com/") + chalk.white(infoData.github)
  },
  {
    label: chalk.hex("#ffffff").bgHex("#000000	")(padLabel(labels.twitter)),
    value: chalk.gray("https://x.com/") + chalk.white(infoData.twitter)
  },
  {
    label: chalk.bold.hex("#ffffff").bgHex("#064f8d")(padLabel(labels.web)),
    value: chalk.white(infoData.web)
  },
  {
    label: chalk.hex("#ffffff").bgHex("#095490")(padLabel(labels.email)),
    value: chalk.white(infoData.email)
  },
  {
    label: chalk.hex("#ffffff").bgHex("#cb3837")(padLabel(labels.npx)),
    value: chalk.white(infoData.npx)
  }
]

// Output
const output =
  intro +
  formattedData.map((data) => `${data.label}   ${data.value}`).join(`\n\n`)

const formattedBox = boxen(output, boxenOptions)

console.log(formattedBox)
