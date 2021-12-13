module.exports = {
    workflow: [
        "workflow/index",
        "workflow/staking",
        "workflow/ledger-setup",
		"workflow/signer-guide",
		"workflow/token-transfer",
        "workflow/setup",
        "workflow/querying",
	"workflow/account-hash",
        "workflow/two-party-multi-sig",
	{
	    type: "category",
            label: "Transferring Tokens",
            collapsible: true,
            collapsed: true,
            items: ["workflow/transfers", "workflow/transfer-workflow", "workflow/deploy-transfer", "workflow/verify-transfer"],
	},
        "workflow/delegate",
        "workflow/undelegate",
        {
            type: "category",
            label: "ERC-20 Sample Guide",
            collapsible: true,
            collapsed: true,
            items: [
                "workflow/erc-20-sample-guide/index",
                "workflow/erc-20-sample-guide/setup",
                "workflow/erc-20-sample-guide/query",
                "workflow/erc-20-sample-guide/transfers",
                "workflow/erc-20-sample-guide/approvals",
                "workflow/erc-20-sample-guide/final-balance",
            ],
        },
    ],
    "dapp-dev-guide": [
        "dapp-dev-guide/index",
        "dapp-dev-guide/getting-started",
        {
            type: "category",
            label: "Writing Smart Contracts",
            collapsible: true,
            collapsed: true,
            items: ["dapp-dev-guide/writing-contracts/index", "dapp-dev-guide/writing-contracts/rust", "dapp-dev-guide/writing-contracts/assembly-script"],
        },
        "dapp-dev-guide/testing",
        "dapp-dev-guide/setup-nctl",
        "dapp-dev-guide/upgrading-contracts",
        "dapp-dev-guide/deploying-contracts",
        "dapp-dev-guide/calling-contracts",
        "dapp-dev-guide/execution-error-codes",
        "dapp-dev-guide/keys",
        {
            type: "category",
            label: "SDK Client Libraries",
            collapsible: true,
            collapsed: true,
            items: ["dapp-dev-guide/sdk/index", "dapp-dev-guide/sdk/script-sdk", "dapp-dev-guide/sdk/csharp-sdk", "dapp-dev-guide/sdk/go-sdk", "dapp-dev-guide/sdk/python-sdk"],
        },
        {
            type: "category",
            label: "Tutorials",
            collapsible: true,
            collapsed: true,
            items: [
                "dapp-dev-guide/tutorials/index",
                {
                    type: "category",
                    label: "A Counter Contract Tutorial",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        "dapp-dev-guide/tutorials/counter/index",
                        "dapp-dev-guide/tutorials/counter/overview",
                        "dapp-dev-guide/tutorials/counter/commands",
                        "dapp-dev-guide/tutorials/counter/setup",
                        "dapp-dev-guide/tutorials/counter/walkthrough",
                    ],
                },
                {
                    type: "category",
                    label: "ERC-20 Tutorial",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        "dapp-dev-guide/tutorials/erc20/index",
                        "dapp-dev-guide/tutorials/erc20/prepare",
                        "dapp-dev-guide/tutorials/erc20/implementation",
                        "dapp-dev-guide/tutorials/erc20/tests",
                    ],
                },
                "dapp-dev-guide/tutorials/kv-storage-tutorial",
                {
                    type: "category",
                    label: "Multi-Signature Tutorial",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        "dapp-dev-guide/tutorials/multi-sig/index",
                        "dapp-dev-guide/tutorials/multi-sig/concepts",
                        "dapp-dev-guide/tutorials/multi-sig/contract",
                        "dapp-dev-guide/tutorials/multi-sig/client",
                        "dapp-dev-guide/tutorials/multi-sig/additional",
                    ],
                },
                "dapp-dev-guide/tutorials/upgrade-tutorial",
                "dapp-dev-guide/tutorials/casper-signer",
            ],
        },
    ],
    operators: [
        "operators/index",
        "operators/hardware",
        "operators/create",
        "operators/joining",
        "operators/setup",
        "operators/bonding",
        "operators/unbonding",
    ],
    design: [
        "design/index",
        "design/p2p",
        "design/global-state",
        "design/execution-semantics",
        "design/accounts",
        "design/block-structure",
        "design/uref",
        "design/serialization-standard",
        "design/tokens",
        "design/appendix",
    ],
    economics: [
        "economics/index",
        "economics/consensus",
        {
            type: "category",
            label: "Runtime Economics",
            collapsible: true,
            collapsed: true,
            items: ["economics/runtime", "economics/gas-concepts"],
        },
        "economics/delegation",
        "economics/concepts",
    ],
    faq: ["faq/index", "faq/faq-general", "faq/faq-enterpise", "faq/faq-developer", "faq/faq-validator"],
    glossary: [
        "glossary/index",
        "glossary/A",
        "glossary/B",
        "glossary/C",
        "glossary/D",
        "glossary/E",
        "glossary/F",
        "glossary/G",
        "glossary/H",
        "glossary/I",
        "glossary/J",
        "glossary/K",
        "glossary/L",
        "glossary/M",
        "glossary/N",
        "glossary/O",
        "glossary/P",
        "glossary/Q",
        "glossary/R",
        "glossary/S",
        "glossary/T",
        "glossary/U",
        "glossary/V",
        "glossary/W",
        "glossary/X",
        "glossary/Y",
        "glossary/Z",
    ],
    staking: ["staking/index", "workflow/staking", "workflow/delegate"],
};
