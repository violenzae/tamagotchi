import { Tamagotchi } from './../src/tamagotchi';

describe('Tamagotchi', () => {
  jest.useFakeTimers();
  let gotchi;

  beforeEach(function() {
    gotchi = new Tamagotchi("Tamagotchi");
    gotchi.setHunger();
    gotchi.setBoredom();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when it is created', () => {
    expect(gotchi.name).toEqual("Tamagotchi");
    expect(gotchi.foodLevel).toEqual(10);
  });

  test('should have a food level of 9 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(gotchi.foodLevel).toEqual(9);
  });

  test('should have badPoints of 1 after 45001 milliseconds', () => {
    jest.advanceTimersByTime(45001);
    expect(gotchi.badPoints).toEqual(1);
  });

  test('should get very hungry if the food level drops below zero', function() {
    gotchi.foodLevel = 0;
    expect(gotchi.starvedCheck()).toEqual(true);
  });

  test('should get dead if 30 seconds pass without feeding', function() {
    jest.advanceTimersByTime(30001);
    expect(gotchi.starvedCheck()).toEqual(true);
  });

  test('should have a food level of ten if it is fed', function() {
    jest.advanceTimersByTime(9001);
    gotchi.feed();
    expect(gotchi.foodLevel).toEqual(10);
  });

  test('should have a happiness level of 8 after 9001 milliseconds', () => {
    jest.advanceTimersByTime(9001);
    expect(gotchi.happiness).toEqual(8);

  });
  test('should get bored if the happiness level drops below zero', function() {
    gotchi.happiness = 0;
    expect(gotchi.boredCheck()).toEqual(true);
  });

  test('should run away if happiness goes below -16 (2 minutes)', function() {
    jest.advanceTimersByTime(120001);
    expect(gotchi.boredCheck()).toMatch("runs away");
  });

  test('should have a happiness level of ten if it is fed', function() {
    jest.advanceTimersByTime(9001);
    gotchi.play();
    expect(gotchi.happiness).toEqual(10);
  });

  test('should have 1 poop ten seconds after feeding', function() {
    gotchi.feed();
    jest.advanceTimersByTime(10001);
    expect(gotchi.poops).toEqual(1);
  });

  test('should have 0 poop after cleaning', function() {
    gotchi.poops = 90;
    gotchi.clean();
    expect(gotchi.poops).toEqual(0);
  });

  test('should increase age and check points', function() {
    gotchi.setAge();
    jest.advanceTimersByTime(120001);
    console.log(gotchi.behavior);
    expect(gotchi.age).toEqual(1);
  });
});