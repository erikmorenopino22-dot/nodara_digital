// Fragmentos de código que se "escriben" en la sección de ingeniería.
// Son ejemplos ilustrativos, uno por cada tipo de trabajo.
export const CODE_SAMPLES = [
  {
    id: 'ui',
    file: 'BookingForm.jsx',
    code: `export function BookingForm({ slots }) {
  const [slot, setSlot] = useState(null)

  return (
    <form onSubmit={() => book(slot)}>
      <SlotPicker slots={slots} onPick={setSlot} />
      <Button disabled={!slot}>Confirm</Button>
    </form>
  )
}`,
  },
  {
    id: 'api',
    file: 'api/bookings.js',
    code: `app.post('/bookings', async (req, res) => {
  const booking = validate(req.body)

  if (await isTaken(booking.slot)) {
    return res.status(409).json({ error: 'slot_taken' })
  }

  const saved = await db.bookings.create(booking)
  res.status(201).json(saved)
})`,
  },
  {
    id: 'automation',
    file: 'automation.js',
    code: `onNewRequest(async (request) => {
  // 1. Understand what the client needs
  const topic = await ai.classify(request.message)

  // 2. Save it where the team works
  await crm.createContact({ ...request, topic })

  // 3. Let the right person know
  await notify.team(topic, request)
})`,
  },
]
