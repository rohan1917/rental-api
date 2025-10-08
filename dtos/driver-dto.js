// Data Transfer Object - Driver

class Driver {
  id;
  name;
  age;
  licenseNumber;
  experience;
  rating;
  availabilityStatus;
  contactNumber;
  vehicleType;
  joiningDate;

  // Parameterized constructor
  constructor(driver) {
    this.id = driver.id;
    this.name = driver.name;
    this.age = driver.age;
    this.licenseNumber = driver.licenseNumber;
    this.experience = driver.experience;
    this.rating = driver.rating;
    this.availabilityStatus = driver.availabilityStatus;
    this.contactNumber = driver.contactNumber;
    this.vehicleType = driver.vehicleType;
    this.joiningDate = driver.joiningDate;
  }
}

// Example: const ref = new DriverDTO(driverObj);

module.exports = Driver;
