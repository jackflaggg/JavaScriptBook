let ask = (question, yes, no) => confitm(question) ? yes() : no();

ask(
    'Вы согласны?',
    () =>{ alert("YES"); },
    () => { alert("NO"); }
)