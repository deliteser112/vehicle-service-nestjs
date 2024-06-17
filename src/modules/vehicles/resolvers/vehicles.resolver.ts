import { Resolver, Query } from '@nestjs/graphql';
import { VehiclesService } from '../services/vehicles.service';

@Resolver('Vehicle')
export class VehiclesResolver {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Query()
  async vehicles() {
    return this.vehiclesService.getVehiclesData();
  }
}
