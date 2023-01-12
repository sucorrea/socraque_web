export type CoutsValues = {
  name: string;
  courtTypes: string[];
  userId: string;
  userTotens: string[];
  lastReplicationDate: Date;
  id: string;
};

export type VideoTypes = {
  id: string;
  label: string;
  date: Date;
  src: string;
  srcSigned: string;
  srcTmb: string;
  srcTmbSigned: string;
};

export type InFiltroVideos = {
  searchDate: string;
  startInterval: number | string;
  endInterval: number | string;
  courtId: string;
};

export type HttpResponse<T> = {
  data: T;
};
