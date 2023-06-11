const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "chattgpt",
    alias: ["chattai"],
    use: "<query>",
    desc: "GPT Chatt",
    type: "entertainment",
    example: `%prefix%command`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/entertainment/chattgpt", { query: text }, "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"))
        killua.sendText(m.from, fetch.result, m)
    },
}
