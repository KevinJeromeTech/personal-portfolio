// How StoreLens reservation holds avoid double-booking the last unit.
// Mirrors create_reservation_hold() in classic-menswear-redesign
// (supabase/migrations/019_atomic_reservation_hold.sql).
export default function ReservationDiagram() {
  return (
    <figure className="hm-diagram">
      <svg
        className="hm-diagram-svg"
        viewBox="0 0 560 404"
        role="img"
        aria-labelledby="hm-diagram-title hm-diagram-desc"
      >
        <title id="hm-diagram-title">How a StoreLens reservation hold works</title>
        <desc id="hm-diagram-desc">
          Two customers try to reserve the last unit at the same moment. Both requests
          enter one Postgres transaction that locks the inventory rows, checks stock,
          and inserts a 24-hour hold. The first customer gets the hold and a confirmation
          email. The second waits for the lock, then sees zero available.
        </desc>

        <defs>
          <marker id="hm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" className="d-arrowhead" />
          </marker>
        </defs>

        {/* Customers */}
        <rect x="20" y="16" width="240" height="56" rx="10" className="d-box" />
        <text x="40" y="40" className="d-strong">Customer A</text>
        <text x="40" y="60" className="d-muted">Reserves the last unit</text>

        <rect x="300" y="16" width="240" height="56" rx="10" className="d-box" />
        <text x="320" y="40" className="d-strong">Customer B</text>
        <text x="320" y="60" className="d-muted">Same item, same moment</text>

        <line x1="140" y1="72" x2="140" y2="106" className="d-line" markerEnd="url(#hm-arrow)" />
        <line x1="420" y1="72" x2="420" y2="106" className="d-line" markerEnd="url(#hm-arrow)" />

        {/* Transaction */}
        <rect x="20" y="110" width="520" height="152" rx="12" className="d-tx" />
        <text x="40" y="138" className="d-code">create_reservation_hold()</text>
        <text x="520" y="138" textAnchor="end" className="d-muted">one Postgres transaction</text>

        <g className="d-step">
          <circle cx="50" cy="172" r="11" className="d-num-bg" />
          <text x="50" y="176" textAnchor="middle" className="d-num">1</text>
          <text x="72" y="177" className="d-body">Lock the inventory rows, in a fixed order</text>

          <circle cx="50" cy="204" r="11" className="d-num-bg" />
          <text x="50" y="208" textAnchor="middle" className="d-num">2</text>
          <text x="72" y="209" className="d-body">Check that the stock is still available</text>

          <circle cx="50" cy="236" r="11" className="d-num-bg" />
          <text x="50" y="240" textAnchor="middle" className="d-num">3</text>
          <text x="72" y="241" className="d-body">Insert the hold, set to expire in 24 hours</text>
        </g>

        <line x1="140" y1="262" x2="140" y2="296" className="d-line" markerEnd="url(#hm-arrow)" />
        <line x1="420" y1="262" x2="420" y2="296" className="d-line d-line-dim" markerEnd="url(#hm-arrow)" />

        {/* Outcomes */}
        <rect x="20" y="300" width="240" height="66" rx="10" className="d-ok" />
        <text x="40" y="325" className="d-strong">Hold created</text>
        <text x="40" y="346" className="d-muted">Email with a confirm link</text>

        <rect x="300" y="300" width="240" height="66" rx="10" className="d-box" />
        <text x="320" y="325" className="d-strong">Waits for the lock</text>
        <text x="320" y="346" className="d-muted">Then sees 0 left, no hold</text>

        <text x="20" y="394" className="d-note">
          Once a hold expires, the stock view stops counting it right away.
        </text>
      </svg>
      {/* Narrow screens: same content as readable HTML instead of a scaled-down SVG */}
      <div className="hm-diagram-mobile">
        <p className="dm-pair">Customer A and customer B reserve the last unit at the same moment.</p>
        <div className="dm-tx">
          <p className="dm-code">create_reservation_hold()</p>
          <p className="dm-muted">one Postgres transaction</p>
          <ol>
            <li>Lock the inventory rows, in a fixed order</li>
            <li>Check that the stock is still available</li>
            <li>Insert the hold, set to expire in 24 hours</li>
          </ol>
        </div>
        <div className="dm-outcomes">
          <p className="dm-ok"><strong>A: hold created</strong>Email with a confirm link</p>
          <p><strong>B: waits for the lock</strong>Then sees 0 left, no hold</p>
        </div>
      </div>
      <figcaption>
        Reservations can&apos;t double-book the last unit: the stock check and the
        insert happen inside one locked transaction.
      </figcaption>
    </figure>
  );
}
