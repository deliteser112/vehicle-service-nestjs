import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesService } from '../../src/modules/vehicles/services/vehicles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from '../../src/modules/vehicles/models/vehicle.model';

describe('VehiclesService', () => {
  let service: VehiclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRootAsync({
          useFactory: () => ({
            uri: 'mongodb://localhost/vehicle_db_test',
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }),
        }),
        MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
      ],
      providers: [VehiclesService],
    }).compile();

    service = module.get<VehiclesService>(VehiclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch and save vehicles data', async () => {
    const data = await service.getVehiclesData();
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toHaveProperty('makeId');
    expect(data[0]).toHaveProperty('makeName');
    expect(data[0]).toHaveProperty('vehicleTypes');
  });
});
