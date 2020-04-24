export const data = [
    {
        id: 1,
        label: 'შექმენით ცვლადი, სახელად name.',
        topic: 'ცვლადი',
        example: 'var yourName;',
        codeResult: 'undefined',
        result: 'var name;',
    },
    {
        id: 2,
        label: 'შექმენით name ცვლადი და მას მიანიჭეთ მნიშვნელობა = გიორგი.',
        topic: 'ცვლადი',
        example: 'var yourName = "ნიკა" ',
        codeResult: 'გიორგი',
        result: 'var name = "გიორგი";',
    },
    {
        id: 3,
        label: 'შექმენით name ცვლადი და surname, name: დათო, surname: ვაშაყმაძე და ცვლად name-ს მიუმატეთ ცვლადი surname.',
        topic: 'ცვლადი',
        example: 'var name = "გიგა"',
        example2: 'var surname = "ანთია"',
        example3: 'name + surname;',
        codeResult: 'დათოვაშაყმაძე',
        result: 'var name = "დათო";var surname = "ვაშაყმაძე";name + surname;',
    },
]