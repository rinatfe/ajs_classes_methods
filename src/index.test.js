import Character, {Bowman, Swordsman, Magician, Undead, Zombie, Daemon} from "./index";

test('test ', () => {
    expect(new Bowman("ivan")).toEqual({name: "ivan", type: "Bowman", health:100, level:1, attack:25, defence:25});
  });

test('test ', () => {
    expect(new Swordsman("ivan")).toEqual({name: "ivan", type: "Swordsman", health:100, level:1, attack:40, defence:10});
  });

test('test ', () => {
    expect(new Magician("ivan")).toEqual({name: "ivan", type: "Magician", health:100, level:1, attack:10, defence:40});
  });

  test('test ', () => {
    expect(new Undead("ivan")).toEqual({name: "ivan", type: "Undead", health:100, level:1, attack:25, defence:25});
  });
  
  test('test ', () => {
    expect(new Zombie("ivan")).toEqual({name: "ivan", type: "Zombie", health:100, level:1, attack:40, defence:10});
  });

  test('test ', () => {
    expect(new Daemon("ivan")).toEqual({name: "ivan", type: "Daemon", health:100, level:1, attack:10, defence:40});
  });


describe('Test Error:', () => {
        test('test ', () => {
            expect(() => new Character("i", "Daemon")).toThrow(Error);
         });
 });

 describe('Test Error:', () => {
    test('test ', () => {
        expect(() => new Character("ivan", "ivan")).toThrow(Error);
     });
});

test('test ', () => {
  const pers = new Daemon("ivan");
  pers.levelUp();
  expect(pers).toEqual({name: "ivan", type: "Daemon", health:100, level:2, attack:12, defence:48});
});

test('test ', () => {
  const pers = new Daemon("ivan");
  pers.damage(5);
  expect(pers).toEqual({name: "ivan", type: "Daemon", health:97, level:1, attack:10, defence:40});
});

describe('Test Error:', () => {
  test('test ', () => {
    const pers = new Character("ivan", "Daemon")
    pers.damage(167)
      expect(() => pers.levelUp()).toThrow(Error);
   });
});