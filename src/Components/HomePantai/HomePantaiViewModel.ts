import dayjs, { Dayjs } from "dayjs";
import { formatToDate } from "brazilian-values";

export class HomePantaiViewModel {
  constructor(
    readonly date: Dayjs | null | undefined,
    readonly intervalo: number[] | undefined
  ) {}

  dataFormatada() {
    const data = this.date?.toDate(),
      dia = data?.getDate().toString(),
      diaF = dia?.length == 1 ? "0" + dia : dia,
      mes = Number(data?.getMonth()) + 1,
      mesF = String(mes).length == 1 ? `0${mes}` : mes,
      anoF = data?.getFullYear();

    return `${anoF}-${mesF}-${diaF}`;
  }

  inicioIntervaloHora() {
    if (this.intervalo) {
      return String(this.intervalo[0]).length === 1
        ? `0${this.intervalo[0]}`
        : this.intervalo[0];
    }
  }

  finalIntervaloHora() {
    if (this.intervalo) {
      return String(this.intervalo[1]).length === 1
        ? `0${this.intervalo[1]}`
        : this.intervalo[1];
    }
  }
  dataSelecionada() {
    return formatToDate(new Date(this.date?.toDate() ?? new Date()));
  }
}
