import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle, VehicleDocument } from '../models/vehicle.model';
import { fetchAndParseXML } from 'src/common/utils/xml-to-json';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>,
  ) {}

  async getVehiclesData() {
    const makesUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=XML';
    const makesData = await fetchAndParseXML(makesUrl);

    const makes = makesData.Response.Results[0].Make;
    const allVehicleTypes = await Promise.all(makes.map(async (make: any) => {
      const vehicleTypesUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/${make.MakeId[0]}?format=xml`;
      const vehicleTypesData = await fetchAndParseXML(vehicleTypesUrl);
      return {
        makeId: make.MakeId[0],
        makeName: make.MakeName[0],
        vehicleTypes: vehicleTypesData.Response.Results[0].VehicleType,
      };
    }));

    const savedVehicles = await this.vehicleModel.insertMany(allVehicleTypes);
    return savedVehicles;
  }
}
