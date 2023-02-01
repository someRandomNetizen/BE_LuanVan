import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../../auth/auth.module';

import { address, addressSchema } from '../schemas/address';
import { ads, adsSchema } from '../schemas/ads';
import { brandAds, brandAdsSchema } from '../schemas/brand_ads';
import { coord, coordSchema } from '../schemas/coord';
import { customer, customerSchema } from '../schemas/customer';
import { driverDistance, driverDistanceSchema } from '../schemas/driver_distance';
import { driver, driverSchema } from '../schemas/driver';
import { packageTypes, packageTypesSchema } from '../schemas/package_types';
import { packageWeight, packageWeightSchema } from '../schemas/package_weight';
import { pickupTime, pickupTimeSchema } from '../schemas/pickup_time';
import { searchHistory, searchHistorySchema } from '../schemas/search_history';
import { shipmentDriver, shipmentDriverSchema } from '../schemas/shipment_driver';
import { shipment, shipmentSchema } from '../schemas/shipment';
import { truckAds, truckAdsSchema } from '../schemas/truck_ads';
import { trucksell, trucksellSchema } from '../schemas/truck_sell';
import { truckTypes, truckTypesSchema } from '../schemas/truck_types';
import { user, userSchema } from '../schemas/user';
import { voucher, voucherSchema } from '../schemas/voucher';
import { manual, manualSchema } from '../schemas/manual';

import { AddressService } from '../services/address';
import { AdsService } from '../services/ads';
import { BrandAdsService } from '../services/brand_ads';
import { CoordService } from '../services/coord';
import { CustomerService } from '../services/customer';
import { DriverDistanceService } from '../services/driver_distance';
import { UserService } from '../services/user';
import { PackageTypesService } from '../services/package_types';
import { PackageWeightService } from '../services/package_weight';
import { PickupTimeService } from '../services/pickup_time';
import { SearchHistoryService } from '../services/search_history';
import { ShipmentDriverService } from '../services/shipment_driver';
import { ShipmentService } from '../services/shipment';
import { TruckAdsService } from '../services/truck_ads';
import { TruckSellService } from '../services/truck_sell';
import { TruckTypesService } from '../services/truck_types';
import { VoucherService } from '../services/voucher';
import { manualService } from '../services/manual';

import { addressController } from '../controllers/address';
import { adsController } from '../controllers/ads';
import { brandAdsController } from '../controllers/brand_ads';
import { coordController } from '../controllers/coord';
import { customerController } from '../controllers/customer';
import { driverDistanceController } from '../controllers/driver_distance';
import { userController } from '../controllers/user';
import { packageTypesController } from '../controllers/package_types';
import { packageWeightController } from '../controllers/package_weight';
import { pickupTimeController } from '../controllers/pickup_time';
import { searchHistoryController } from '../controllers/search_history';
import { shipmentDriverController } from '../controllers/shipment_driver';
import { shipmentController } from '../controllers/shipment';
import { truckAdsController } from '../controllers/truck_ads';
import { trucksellController } from '../controllers/truck_sell';
import { truckTypesController } from '../controllers/truck_types';
import { voucherController } from '../controllers/voucher';
import { manualController } from '../controllers/manual';
@Module({
  imports: [MongooseModule.forFeature([{name: address.name, schema: addressSchema }]),
            MongooseModule.forFeature([{name: ads.name, schema: adsSchema }]),
            MongooseModule.forFeature([{name: brandAds.name, schema: brandAdsSchema }]),
            MongooseModule.forFeature([{name: coord.name, schema: coordSchema }]),
            MongooseModule.forFeature([{name: customer.name, schema: customerSchema }]),
            MongooseModule.forFeature([{name: driverDistance.name, schema: driverDistanceSchema }]),
            MongooseModule.forFeature([{name: driver.name, schema: driverSchema }]),
            MongooseModule.forFeature([{name: packageTypes.name, schema: packageTypesSchema }]),
            MongooseModule.forFeature([{name: packageWeight.name, schema: packageWeightSchema }]),
            MongooseModule.forFeature([{name: pickupTime.name, schema: pickupTimeSchema }]),
            MongooseModule.forFeature([{name: searchHistory.name, schema: searchHistorySchema }]),
            MongooseModule.forFeature([{name: shipmentDriver.name, schema: shipmentDriverSchema }]),
            MongooseModule.forFeature([{name: shipment.name, schema: shipmentSchema }]),
            MongooseModule.forFeature([{name: truckAds.name, schema: truckAdsSchema }]),
            MongooseModule.forFeature([{name: trucksell.name, schema: trucksellSchema }]),
            MongooseModule.forFeature([{name: truckTypes.name, schema: truckTypesSchema }]),
            MongooseModule.forFeature([{name: user.name, schema: userSchema }]),
            MongooseModule.forFeature([{name: voucher.name, schema: voucherSchema }]),
            MongooseModule.forFeature([{name: manual.name, schema: manualSchema }]),
            AuthModule, UsersModule],

  controllers: [addressController, adsController, brandAdsController, coordController, customerController,
               driverDistanceController, userController, packageTypesController, packageWeightController,
               pickupTimeController, searchHistoryController, shipmentDriverController, shipmentController,
               truckAdsController, trucksellController, truckTypesController, voucherController, manualController],
  
  providers: [AddressService, AdsService, BrandAdsService, CoordService, CustomerService,
              DriverDistanceService, UserService, PackageTypesService, PackageWeightService,
              PickupTimeService, SearchHistoryService, ShipmentDriverService, ShipmentService,
              TruckAdsService, TruckSellService, TruckTypesService, VoucherService, manualService],
})
export class userModule {}

