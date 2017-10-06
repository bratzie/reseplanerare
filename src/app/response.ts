export interface Metro {
  groupOfLine: string;
  displayTime: string;
  transportMode: string;
  lineNumber: string;
  destination: string;
  journeyDirection: number;
  stopAreaName: string;
  stopAreaNumber: number;
  stopPointNumber: number;
  stopPointDesignation: string;
  timeTabledDateTime: string;
  expectedDateTime: string;
  journeyNumber: number;
  deviations?: any;
}

export interface Bus {
  groupOfLine?: any;
  transportMode: string;
  lineNumber: string;
  destination: string;
  journeyDirection: number;
  stopAreaName: string;
  stopAreaNumber: number;
  stopPointNumber: number;
  stopPointDesignation: string;
  timeTabledDateTime: string;
  expectedDateTime: string;
  displayTime: string;
  journeyNumber: number;
  deviations?: any;
}

export interface Tram {
  transportMode: string;
  lineNumber: string;
  destination: string;
  journeyDirection: number;
  groupOfLine: string;
  stopAreaName: string;
  stopAreaNumber: number;
  stopPointNumber: number;
  stopPointDesignation: string;
  timeTabledDateTime: string;
  expectedDateTime: string;
  displayTime: string;
  journeyNumber: number;
  deviations?: any;
}

export interface StopInfo {
  stopAreaNumber: number;
  stopAreaName: string;
  transportMode: string;
  groupOfLine: string;
}

export interface Deviation {
  text: string;
  consequence?: any;
  importanceLevel: number;
}

export interface StopPointDeviation {
  stopInfo: StopInfo;
  deviation: Deviation;
}

export interface ResponseData {
  latestUpdate: string;
  dataAge: number;
  metros: Metro[];
  buses: Bus[];
  trains: any[];
  trams: Tram[];
  ships: any[];
  stopPointDeviations: StopPointDeviation[];
}

export interface RootObject {
  statusCode: number;
  message?: any;
  executionTime: number;
  responseData: ResponseData;
}
