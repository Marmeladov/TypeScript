/// <reference path='fourslash.ts' />


////interface I { x: number; }
////new class implements I {};

verify.codeFix({
    description: "Implement interface 'I'",
    // TODO: GH#18445
    newFileContent:
`interface I { x: number; }
new class implements I {\r
    x: number;\r
};`,
});
