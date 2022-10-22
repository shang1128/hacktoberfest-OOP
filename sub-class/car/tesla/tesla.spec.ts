import { Tesla } from "./tesla";

describe('Toyota', () => {
  it('should return fields passed to the Toyota', () => {
    // Setup
    const expected = {
      name: 'Tesla',
      speed: 20,
      color: 'silver',
		}
		const car = new Tesla(expected.speed, expected.color);

		expect(expected.name).toEqual(car.getName())
		expect(expected.speed).toEqual(car.getSpeed())
		expect(expected.color).toEqual(car.getColor())
	})
});