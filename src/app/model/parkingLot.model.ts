export class ParkingLot{
    public veiculo: String
    public placa: String
    public driver: String
    driverContact: String

    constructor(veiculo:String, placa:String, driver:String, driverContact:String){
        this.veiculo = veiculo
        this.placa = placa
        this.driver = driver
        this.driverContact = driverContact
    }
}