import axios from 'axios'
import moment from 'moment'

import {
  CoutsValues,
  HttpResponse,
  InFiltroVideos,
  VideoTypes,
} from '../../Types'

export const Api = axios.create({
  baseURL: 'https://www.socraque.com.br/api',
})

export async function buscarVideosFiltro(
  entrada: InFiltroVideos,
): Promise<HttpResponse<VideoTypes[]>> {
  const dados: HttpResponse<VideoTypes[]> = await Api.post('videos', entrada)

  return dados
}

export async function buscarVideos(): Promise<HttpResponse<VideoTypes[]>> {
  const dt = new Date()
  const dateString = moment(dt).format('YYYYMMDD')

  const dados: HttpResponse<VideoTypes[]> = await Api.get(
    `services/625f772b2875ebc163c6ef87/last?dt=${dateString}`,
  )

  return dados
}

export async function buscarCourts(): Promise<HttpResponse<CoutsValues[]>> {
  const dados: HttpResponse<CoutsValues[]> = await Api.get(
    'courts/my/625f772b2875ebc163c6ef87',
  )

  return dados
}
