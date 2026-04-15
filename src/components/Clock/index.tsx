import { useEffect, useState } from 'react'
import styles from './styles.module.css'

const timeZonesDisponiveis = [
  'America/Sao_Paulo',
  'America/Manaus',
  'America/Rio_Branco',
  'Europe/Lisbon',
  'UTC',
]

export function Clock() {
  const [agora, setAgora] = useState(() => new Date())
  const [timeZone, setTimeZone] = useState(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
  )
  const [mostrarSeletor, setMostrarSeletor] = useState(false)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setAgora(new Date())
    }, 1000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  const horarioFormatado = agora.toLocaleTimeString('pt-BR', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  return (
    <div className={styles.clockRow}>
      <span>{horarioFormatado}</span>

      <button
        type="button"
        className={styles.timeZoneButton}
        onClick={() => setMostrarSeletor((valorAtual) => !valorAtual)}
      >
        Fuso
      </button>

      {mostrarSeletor && (
        <select
          className={styles.timeZoneSelect}
          value={timeZone}
          onChange={(event) => setTimeZone(event.target.value)}
        >
          {timeZonesDisponiveis.map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}