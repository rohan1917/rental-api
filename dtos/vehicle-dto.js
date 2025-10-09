// Data Transfer Object - Vehicle

class Vehicle {
    id;
    vehicleNumber;
    type;
    brand;
    model;
    fuelType;
    transmission;
    seatingCapacity;
    rentalPricePerDay;
    availabilityStatus;
    registrationDate;
    lastServiceDate;
    insuranceExpiryDate;

    // Parameterized Constructor
    constructor(vehicleData) {
        this.id = vehicleData.id;
        this.vehicleNumber = vehicleData.vehicleNumber;
        this.type = vehicleData.type;
        this.brand = vehicleData.brand;
        this.model = vehicleData.model;
        this.fuelType = vehicleData.fuelType;
        this.transmission = vehicleData.transmission;
        this.seatingCapacity = vehicleData.seatingCapacity;
        this.rentalPricePerDay = vehicleData.rentalPricePerDay;
        this.availabilityStatus = vehicleData.availabilityStatus;
        this.registrationDate = vehicleData.registrationDate;
        this.lastServiceDate = vehicleData.lastServiceDate;
        this.insuranceExpiryDate = vehicleData.insuranceExpiryDate;
    }
}


module.exports = Vehicle;