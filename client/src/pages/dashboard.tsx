import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  AlertTriangle, 
  TrendingDown, 
  Activity,
  PiggyBank,
  Banknote,
  ShieldAlert,
  ArrowDownRight,
  ArrowUpRight,
  UserX,
  Zap,
  Hammer,
  Scale,
  Building,
  Users,
  Info,
  Briefcase,
  Wrench,
  ChevronRight,
  MessageSquare
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
  Line,
  ComposedChart
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

// Data Extracted from Winter Hills 77 PDF
const expenseData = [
  { name: "Manpower (116 Staff)", value: 2484322, color: "hsl(var(--chart-1))", description: "Security (42), Housekeeping (30), Technical (27)" },
  { name: "STP Treated Water", value: 394167, color: "hsl(var(--chart-2))", description: "Water treatment and disposal charges." },
  { name: "Other AMCs", value: 192829, color: "hsl(var(--chart-3))", description: "DG, Fire, CCTV, WTP" },
  { name: "Lift AMC", value: 167071, color: "hsl(var(--chart-4))", description: "Elevator maintenance contract." },
  { name: "Management Fee", value: 150000, color: "hsl(var(--chart-5))", description: "Abante facility management fee." },
  { name: "Others (Power, Garbage)", value: 249046, color: "hsl(var(--warning))", description: "33 KV Line, Vending, Garbage, Water." }
];

const manpowerData = [
  { team: "Security (42)", cost: 919496, color: "hsl(var(--chart-1))" },
  { team: "Technical & Plumber (27)", cost: 556588, color: "hsl(var(--chart-2))" },
  { team: "Housekeeping (30)", cost: 472560, color: "hsl(var(--chart-3))" },
  { team: "Management Team (6)", cost: 301680, color: "hsl(var(--chart-4))" },
  { team: "Horticulture (10)", cost: 154338, color: "hsl(var(--chart-5))" },
  { team: "Helpdesk & Gym (2)", cost: 79140, color: "hsl(var(--warning))" },
];

const incomeDataPie = [
  { name: "CAM Recovery", value: 4000000, color: "hsl(var(--chart-2))" },
  { name: "Electricity Recovery", value: 1700000, color: "hsl(var(--chart-3))" },
  { name: "Bank Interest", value: 392926, color: "hsl(var(--chart-1))" },
  { name: "Move In/Out", value: 66136, color: "hsl(var(--chart-4))" },
  { name: "Mutation", value: 55000, color: "hsl(var(--chart-5))" },
  { name: "Ads & Rent", value: 81116, color: "hsl(var(--warning))" }
];

const incomeData = [
  { source: "Bank Interest (IDFC + HDFC)", amount: 392926, status: "Investment Return" },
  { source: "Move In/Out & Penalties", amount: 66136, status: "Variable" },
  { source: "Mutation Charges", amount: 55000, status: "Variable" },
  { source: "Lift & Other Ads", amount: 38820, status: "Recurring" },
  { source: "Rent (Keystone & Restaurant)", amount: 30000, status: "Recurring" },
  { source: "Canopy By Mygate", amount: 12296, status: "Recurring" }
];

const majorDefaulters = [
  { flat: "001", name: "Resident 1", amount: 172814 },
  { flat: "002", name: "Resident 2", amount: 156312 },
  { flat: "003", name: "Resident 3", amount: 137605 },
  { flat: "004", name: "Resident 4", amount: 137605 },
  { flat: "005", name: "Resident 5", amount: 119914 }
];

const oneTimeExpenses = [
  { item: "Ground Floor Lift Lobby", status: "Completed", cost: "Avg ₹9.80L/mo" },
  { item: "Water Body & Cycle Stand", status: "Completed", cost: "Included" },
  { item: "Access Card & Biometric Sys", status: "Completed", cost: "Included" },
  { item: "Park Plus Boom Barrier", status: "Completed", cost: "Included" },
  { item: "Lift Cabin Cladding", status: "Pending", cost: "TBD" },
  { item: "LED Signage & Bus Stand", status: "Pending", cost: "TBD" },
  { item: "Installation of Borewell", status: "Pending", cost: "TBD" }
];

// 6 Months Cashflow Data (Aug 24 to Jan 25)
const monthlyCashflow = [
  { month: 'Aug-24', incomeCAM: 40, incomeElec: 20, incomeOther: 45, expCAM: 44, expElec: 20, expOneTime: 4, net: 37.97 },
  { month: 'Sep-24', incomeCAM: 40, incomeElec: 18, incomeOther: 7, expCAM: 44, expElec: 16, expOneTime: 17, net: -13.23 },
  { month: 'Oct-24', incomeCAM: 40, incomeElec: 18, incomeOther: 6, expCAM: 47, expElec: 16, expOneTime: 15, net: -15.21 },
  { month: 'Nov-24', incomeCAM: 40, incomeElec: 12, incomeOther: 6, expCAM: 43, expElec: 11, expOneTime: 4, net: 0.08 },
  { month: 'Dec-24', incomeCAM: 40, incomeElec: 15, incomeOther: 6, expCAM: 47, expElec: 13, expOneTime: 17, net: -16.53 },
  { month: 'Jan-25', incomeCAM: 40, incomeElec: 19, incomeOther: 6, expCAM: 46, expElec: 18, expOneTime: 2, net: -2.52 },
];

const builderHandoverData = [
  { name: "Corpus Fund (IFMS)", received: 1500000, pending: 4500000, total: 6000000 },
  { name: "Bank Balance (Op. Bal)", received: 250000, pending: 0, total: 250000 },
  { name: "DG Diesel Stock", received: 45000, pending: 0, total: 45000 },
  { name: "Petty Cash", received: 12000, pending: 0, total: 12000 },
  { name: "Unpaid Vendor Bills (Liability)", received: 0, pending: 2350000, total: 2350000 } // Liabilities left by builder
];

const handoverAssets = [
  { item: "Bank Account Balance Transferred", amount: 250000, status: "Received" },
  { item: "Fixed Deposits (Corpus)", amount: 1500000, status: "Partial - ₹45L Pending" },
  { item: "DG Set Diesel Stock", amount: 45000, status: "Received" },
  { item: "Petty Cash", amount: 12000, status: "Received" }
];

const vendorProjects = [
  { 
    id: "PRJ-001", 
    title: "Lift Cabin Cladding", 
    type: "Civil/Interior", 
    budget: "₹8.5 Lakhs", 
    deadline: "30 Apr 2025", 
    status: "Open for Bidding", 
    description: "Complete interior cladding and aesthetic upgrade for all 14 passenger lifts. Requires high quality SS finish and new lighting.",
    scopeOfWork: [
      "Removal of existing damaged cladding in 14 passenger lifts.",
      "Supply and installation of 304 Grade Stainless Steel (Hairline Finish) panels.",
      "Installation of new LED profile lighting inside cabins.",
      "Replacement of PVC flooring with heavy-duty anti-skid granite.",
      "All work to be done during non-peak hours (11 AM to 4 PM)."
    ]
  },
  { 
    id: "PRJ-002", 
    title: "LED Signage & Bus Stand", 
    type: "Fabrication", 
    budget: "₹2.2 Lakhs", 
    deadline: "15 May 2025", 
    status: "Open for Bidding", 
    description: "Fabrication of society main entry LED signage and construction of a covered school bus waiting stand for children.",
    scopeOfWork: [
      "Design and fabrication of 12x4 ft LED backlit 3D acrylic signage.",
      "Construction of 15x8 ft MS steel framed bus waiting shelter.",
      "Polycarbonate roofing for the shelter.",
      "Installation of 4 seating benches inside the shelter.",
      "Painting and civil foundation work included."
    ]
  },
  { 
    id: "PRJ-003", 
    title: "New Borewell Installation", 
    type: "Plumbing/Civil", 
    budget: "₹12.0 Lakhs", 
    deadline: "Pending Approval", 
    status: "Upcoming", 
    description: "Drilling and complete installation of a new 450ft borewell including submersible pumps, piping to main WTP, and electrical panel.",
    scopeOfWork: [
      "Rig drilling up to 450-500 feet depth.",
      "Supply and installation of 10HP Submersible Pump (KSB/CRI).",
      "UPVC piping from borewell to the main WTP tank (approx 150 meters).",
      "Installation of automated electrical starter panel.",
      "CGWA compliance documentation assistance."
    ]
  },
  { 
    id: "PRJ-004", 
    title: "Basement Seepage Repair", 
    type: "Waterproofing", 
    budget: "To be estimated", 
    deadline: "Urgent", 
    status: "Open for Bidding", 
    description: "Identification and permanent waterproofing treatment of active seepage points in Basement 1 and 2 near expansion joints.",
    scopeOfWork: [
      "PU injection grouting at 12 identified active leakage points.",
      "V-groove cutting and filling with polymer modified mortar along expansion joints.",
      "Application of crystalline waterproofing coating (2 coats).",
      "Core cutting for pressure release if necessary.",
      "Minimum 5-year guarantee required on the treated areas."
    ]
  }
];

const topIssues = [
  { issue: "Water leaking in Basement 2 near Tower C", votes: 45, status: "Investigating" },
  { issue: "AC Drippage from upper floors (Tower A)", votes: 38, status: "Notices Issued" },
  { issue: "STP Overflow during peak morning hours", votes: 32, status: "Vendor Assigned" },
  { issue: "Visitor parking space shortage on weekends", votes: 28, status: "Under Review" },
  { issue: "Street lights flickering near the main gate", votes: 15, status: "Resolved" }
];

export default function Dashboard() {
  const totalExpense = 4540171; 
  const totalMonthlyBilling = 3969000; 
  const totalAdditionalIncome = incomeData.reduce((acc, curr) => acc + curr.amount, 0);
  const totalAssets = handoverAssets.reduce((acc, curr) => acc + curr.amount, 0);
  const totalLiabilities = 2350000;

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10 font-sans pb-20">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/40 pb-6">
          <div>
            <Alert className="mb-4 bg-primary/5 border-primary/20">
              <Info className="h-4 w-4 text-primary" />
              <AlertTitle className="text-primary font-semibold">Demo Version</AlertTitle>
              <AlertDescription className="text-muted-foreground text-sm">
                This is a dashboard preview using dummy data. The real application with live data will be published later.
              </AlertDescription>
            </Alert>
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 px-3 py-1 text-sm rounded-full">Financial Overview</Badge>
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Winter Hills 77, Gurgaon</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Society Financial Dashboard</h1>
            <p className="text-muted-foreground mt-2 max-w-3xl text-lg">
              A transparent view of our community's finances, including income, expenses, and pending handover items from the builder.
            </p>
          </div>
          <div className="text-right">
             <div className="flex items-center gap-2 justify-end mb-1">
                <Activity className="h-4 w-4 text-primary" />
                <p className="text-sm text-primary font-medium">Net Cashflow (6 mo avg)</p>
             </div>
            <p className="text-3xl font-mono font-bold text-foreground">-₹1.57<span className="text-lg text-muted-foreground font-sans"> L / mo</span></p>
          </div>
        </div>

        {/* High Level KPIs - Total Available Assets vs Liabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-border/40 bg-card/40 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Building size={40} className="text-foreground" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="font-medium">Total Available Assets</CardDescription>
              <CardTitle className="text-2xl font-mono text-green-500">₹{(totalAssets/100000).toFixed(2)} L</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                Total money received from Builder
              </div>
            </CardContent>
          </Card>

          <Card className="border-destructive/20 bg-destructive/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <ShieldAlert size={40} className="text-destructive" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-destructive/80 font-medium">Total Liabilities</CardDescription>
              <CardTitle className="text-2xl font-mono text-destructive">₹{(totalLiabilities/100000).toFixed(2)} L</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                Unpaid bills handed over
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-500/20 bg-orange-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <TrendingDown size={40} className="text-orange-500" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-orange-500/80 font-medium">Money Pending (Bacha Hai)</CardDescription>
              <CardTitle className="text-2xl font-mono text-orange-500">₹45.0 L</CardTitle>
            </CardHeader>
            <CardContent>
               <p className="text-xs text-muted-foreground mt-1">Missing Corpus (IFMS) from builder.</p>
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-green-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <PiggyBank size={40} className="text-green-500" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription className="text-green-500/80 font-medium">Total Sources of Income / mo</CardDescription>
              <CardTitle className="text-2xl font-mono text-green-500">₹{((totalMonthlyBilling + totalAdditionalIncome)/100000).toFixed(2)} L</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mt-1">CAM + Additional Income</p>
            </CardContent>
          </Card>
        </div>

        {/* Builder Handover Status - Kis Chiz Ka Kitna Paisa Bacha Hai */}
        <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Building className="text-primary-foreground h-5 w-5" />
                  Builder Handover: Received vs Pending
                </CardTitle>
                <CardDescription>Graphical and tabular representation of what we received vs what the builder still owes us or left unpaid.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-4">
                 <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={builderHandoverData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                        <XAxis type="number" tickFormatter={(value) => `₹${value/100000}L`} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={140} />
                        <Tooltip 
                          cursor={{ fill: 'hsl(var(--muted)/0.3)' }}
                          contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))', borderRadius: '8px' }}
                          formatter={(value: number) => [`₹${(value/100000).toFixed(2)} Lakhs`, 'Amount']}
                        />
                        <Legend />
                        <Bar dataKey="received" name="Received Amount" stackId="a" fill="hsl(var(--chart-2))" radius={[0, 0, 0, 0]} />
                        <Bar dataKey="pending" name="Pending / Due" stackId="a" fill="hsl(var(--chart-1))" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                 </div>
                 
                 <div className="overflow-x-auto rounded-md border border-border/40 w-full">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead>Fund / Item</TableHead>
                        <TableHead className="text-right">Received</TableHead>
                        <TableHead className="text-right">Pending / Due</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {builderHandoverData.map((item, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-medium text-sm">{item.name}</TableCell>
                          <TableCell className="text-right font-mono text-green-500 text-sm">
                            {item.received > 0 ? `₹${(item.received/100000).toFixed(2)}L` : "-"}
                          </TableCell>
                          <TableCell className="text-right font-mono text-destructive text-sm font-bold">
                            {item.pending > 0 ? `₹${(item.pending/100000).toFixed(2)}L` : "-"}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="bg-muted/30">
                        <TableCell className="font-bold">Total</TableCell>
                        <TableCell className="text-right font-mono text-green-500 font-bold">₹{(totalAssets/100000).toFixed(2)}L</TableCell>
                        <TableCell className="text-right font-mono text-destructive font-bold">₹{((4500000 + totalLiabilities)/100000).toFixed(2)}L</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
             </div>
          </CardContent>
        </Card>

        {/* Total Sources of Income */}
        <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Banknote className="text-green-500 h-5 w-5" />
                  Total Sources of Income Available
                </CardTitle>
                <CardDescription>Graphical and tabular view of where the society's money comes from.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-4">
                 <div className="h-[300px] w-full">
                   <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                       <Pie
                         data={incomeDataPie}
                         cx="50%"
                         cy="50%"
                         innerRadius={70}
                         outerRadius={120}
                         paddingAngle={5}
                         dataKey="value"
                       >
                         {incomeDataPie.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                         ))}
                       </Pie>
                       <Tooltip 
                         contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))', borderRadius: '8px' }}
                         formatter={(value: number) => [`₹${(value/100000).toFixed(2)} Lakhs`, 'Amount']}
                       />
                       <Legend verticalAlign="bottom" height={36}/>
                     </PieChart>
                   </ResponsiveContainer>
                 </div>
                 
                 <div className="overflow-x-auto rounded-md border border-border/40 w-full">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead>Income Source</TableHead>
                        <TableHead className="text-right">Monthly Avg (₹)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {incomeDataPie.map((inc, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium text-sm flex items-center gap-2 border-b-0 py-3">
                            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: inc.color }}></span>
                            {inc.name}
                          </TableCell>
                          <TableCell className="text-right font-mono text-green-500 py-3">₹{(inc.value/100000).toFixed(2)}L</TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="bg-muted/30 font-bold">
                        <TableCell className="py-3">Total Monthly Income:</TableCell>
                        <TableCell className="text-right font-mono text-green-500 py-3">₹{((totalMonthlyBilling + totalAdditionalIncome + 1700000)/100000).toFixed(2)}L</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
             </div>
          </CardContent>
        </Card>

        {/* Total Expenditure: Item & Service wise */}
        <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="text-destructive h-5 w-5" />
                  Total Expenditure: Item & Service wise Breakdown
                </CardTitle>
                <CardDescription>Graphical and tabular view of all things spent on and which item/service.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-4">
                 <div className="h-[300px] w-full">
                   <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                       <Pie
                         data={expenseData}
                         cx="50%"
                         cy="50%"
                         innerRadius={70}
                         outerRadius={120}
                         paddingAngle={5}
                         dataKey="value"
                       >
                         {expenseData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                         ))}
                       </Pie>
                       <Tooltip 
                         contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))', borderRadius: '8px' }}
                         formatter={(value: number) => [`₹${(value/100000).toFixed(2)} Lakhs`, 'Cost']}
                       />
                       <Legend verticalAlign="bottom" height={36}/>
                     </PieChart>
                   </ResponsiveContainer>
                 </div>
                 
                 <div className="overflow-x-auto rounded-md border border-border/40 w-full">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead>Service / Item Spent On</TableHead>
                        <TableHead className="text-right">Monthly Avg (₹)</TableHead>
                        <TableHead className="text-right">%</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {expenseData.map((expense, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium text-sm py-3">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: expense.color }}></span>
                              {expense.name}
                            </div>
                            <span className="text-[10px] text-muted-foreground ml-5">{expense.description}</span>
                          </TableCell>
                          <TableCell className="text-right font-mono text-destructive py-3">₹{(expense.value/100000).toFixed(2)}L</TableCell>
                          <TableCell className="text-right text-xs text-muted-foreground py-3">{Math.round((expense.value / totalExpense) * 100)}%</TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="bg-muted/30 font-bold">
                        <TableCell className="py-3">Total Monthly Expenses:</TableCell>
                        <TableCell className="text-right font-mono text-destructive py-3">₹{(totalExpense/100000).toFixed(2)}L</TableCell>
                        <TableCell className="py-3"></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
             </div>
          </CardContent>
        </Card>


        {/* 6 Months Cashflow Chart */}
        <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="text-primary-foreground h-5 w-5" />
                  6-Month Cashflow Trend (Aug 24 to Jan 25)
                </CardTitle>
                <CardDescription>Detailed month-by-month visualization of stacked income vs stacked expenditure (in Lakhs).</CardDescription>
              </div>
              <div className="text-right hidden sm:block">
                 <p className="text-sm text-muted-foreground mb-1">Total 6mo Net Cashflow</p>
                 <Badge variant="destructive" className="text-lg">₹ -9.43 Lakhs</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={monthlyCashflow} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis tickFormatter={(value) => `₹${value}L`} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    cursor={{ fill: 'hsl(var(--muted)/0.3)' }}
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))', borderRadius: '8px' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  
                  {/* Stacked Income */}
                  <Bar dataKey="incomeCAM" stackId="income" name="CAM Income" fill="hsl(var(--chart-2))" maxBarSize={40} />
                  <Bar dataKey="incomeElec" stackId="income" name="Elec. Income" fill="hsl(var(--chart-5))" maxBarSize={40} />
                  <Bar dataKey="incomeOther" stackId="income" name="Other Income" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} maxBarSize={40} />

                  {/* Stacked Expense */}
                  <Bar dataKey="expCAM" stackId="expense" name="CAM Expense" fill="hsl(var(--chart-1))" maxBarSize={40} />
                  <Bar dataKey="expElec" stackId="expense" name="Elec. Expense" fill="hsl(var(--chart-3))" maxBarSize={40} />
                  <Bar dataKey="expOneTime" stackId="expense" name="One-Time Exp" fill="hsl(var(--warning))" radius={[4, 4, 0, 0]} maxBarSize={40} />

                  <Line type="monotone" dataKey="net" name="Net Cashflow" stroke="hsl(var(--foreground))" strokeWidth={3} dot={{ r: 6, fill: "hsl(var(--background))" }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {/* Manpower Breakdown Table */}
          <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary-foreground" />
                Manpower Cost Breakdown (116 Staff)
              </CardTitle>
              <CardDescription>Detailed split of the ₹24.8L monthly manpower expenditure.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full mb-6">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={manpowerData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                      <XAxis dataKey="team" stroke="hsl(var(--muted-foreground))" fontSize={11} angle={-15} textAnchor="end" height={50} />
                      <YAxis tickFormatter={(value) => `₹${value/100000}L`} stroke="hsl(var(--muted-foreground))" fontSize={11} />
                      <Tooltip 
                        cursor={{ fill: 'hsl(var(--muted)/0.3)' }}
                        contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))', borderRadius: '8px' }}
                        formatter={(value: number) => [`₹${(value/100000).toFixed(2)} Lakhs`, 'Cost']}
                      />
                      <Bar dataKey="cost" radius={[4, 4, 0, 0]}>
                        {manpowerData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                 </ResponsiveContainer>
              </div>
              <div className="overflow-x-auto rounded-md border border-border/40">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      <TableHead>Department</TableHead>
                      <TableHead className="text-right">Monthly Cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {manpowerData.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium text-sm flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                           {item.team}
                        </TableCell>
                        <TableCell className="text-right font-mono font-medium">₹{(item.cost/100000).toFixed(2)} L</TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-muted/10 text-muted-foreground font-bold">
                      <TableCell>Total Manpower Cost</TableCell>
                      <TableCell className="text-right text-destructive font-mono">₹24.84 L</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Electricity Economics */}
          <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Electricity: Expense vs Recovery
              </CardTitle>
              <CardDescription>Average monthly breakdown of power economics.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/40">
                     <p className="text-sm text-muted-foreground mb-1">DHBVN Bill</p>
                     <p className="text-xl font-mono">₹13.24 L</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/40">
                     <p className="text-sm text-muted-foreground mb-1">Diesel & DAFF</p>
                     <p className="text-xl font-mono">₹2.42 L</p>
                  </div>
               </div>

               <div className="space-y-3">
                 <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Power Expenditure</span>
                    <span className="font-mono text-destructive font-medium">₹15.66 L</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Billed to Residents</span>
                    <span className="font-mono text-green-500 font-medium">₹16.91 L</span>
                 </div>
                 <div className="h-px w-full bg-border"></div>
                 <div className="flex justify-between text-sm font-bold">
                    <span>Net Surplus / Difference</span>
                    <span className="font-mono text-primary">₹1.24 L</span>
                 </div>
                 <p className="text-xs text-muted-foreground text-right mt-2">Proposal: Decrease CAE by 17 paise/sqft</p>
               </div>

               <div className="mt-8 border-t border-border/40 pt-6">
                  <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                     <Hammer className="h-4 w-4 text-primary-foreground" />
                     Society Upgradation Projects (Avg ₹9.80L/mo)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <p className="text-xs font-semibold text-green-500 uppercase tracking-wider mb-2">Completed Works</p>
                        {oneTimeExpenses.filter(e => e.status === "Completed").slice(0, 3).map((item, idx) => (
                           <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500 shrink-0"></div>
                              {item.item}
                           </div>
                        ))}
                     </div>
                     <div className="space-y-2">
                        <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-2">Pending Works</p>
                        {oneTimeExpenses.filter(e => e.status === "Pending").slice(0, 3).map((item, idx) => (
                           <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <div className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0"></div>
                              {item.item}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </CardContent>
          </Card>
        </div>

        {/* Defaulters Table (Full Width) */}
        <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserX className="h-5 w-5 text-destructive" />
              Top Maintenance Defaulters
            </CardTitle>
            <CardDescription>Total Outstanding Amount: ₹16.19 Lakhs across the society.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-md border border-border/40">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead>Flat No.</TableHead>
                    <TableHead>Resident Name</TableHead>
                    <TableHead className="text-right">Outstanding Amount (₹)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {majorDefaulters.map((defaulter, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium font-mono text-sm">{defaulter.flat}</TableCell>
                      <TableCell className="text-sm">{defaulter.name}</TableCell>
                      <TableCell className="text-right font-mono text-destructive text-sm">₹{defaulter.amount.toLocaleString('en-IN')}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-muted/10 text-muted-foreground font-bold">
                    <TableCell colSpan={2}>+ 20 Other Minor Defaulters</TableCell>
                    <TableCell className="text-right text-destructive font-mono">₹7,91,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Vendor Onboarding & Open Projects */}
        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Vendor Onboarding & Opportunities
            </h2>
            <p className="text-muted-foreground mt-1">Explore open projects and submit your bids to work with our society.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {vendorProjects.map((project, idx) => (
              <Card key={idx} className="border-border/40 hover:border-primary/50 transition-all cursor-pointer group flex flex-col h-full bg-card/40 backdrop-blur-sm">
                <CardHeader className="pb-3 flex-none">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">{project.id}</Badge>
                    <Badge className={project.status === 'Open for Bidding' ? 'bg-green-500/10 text-green-600 hover:bg-green-500/20 border-green-500/20' : 'bg-orange-500/10 text-orange-600 hover:bg-orange-500/20 border-orange-500/20'}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-xs font-medium uppercase tracking-wider mt-1">{project.type}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow flex flex-col">
                  <p className="text-sm text-muted-foreground line-clamp-3 flex-grow">{project.description}</p>
                  
                  <div className="space-y-2 pt-2 border-t border-border/40 mt-auto">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Est. Budget:</span>
                      <span className="font-mono font-medium">{project.budget}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Deadline:</span>
                      <span className="font-medium text-foreground">{project.deadline}</span>
                    </div>
                  </div>
                  
                  <div className="pt-2 mt-auto">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="w-full bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary font-medium py-2 px-4 rounded-md text-sm transition-colors flex items-center justify-center gap-2">
                          View Scope & Bid <ChevronRight className="h-4 w-4" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{project.id}</Badge>
                            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">{project.type}</Badge>
                          </div>
                          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                          <DialogDescription className="text-base text-foreground mt-2">
                            {project.description}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/40 my-2">
                          <div>
                            <p className="text-sm text-muted-foreground">Estimated Budget</p>
                            <p className="font-mono font-bold text-lg">{project.budget}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Submission Deadline</p>
                            <p className="font-bold text-lg">{project.deadline}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-bold flex items-center gap-2 text-lg">
                            <Hammer className="h-4 w-4 text-primary" /> Scope of Work
                          </h4>
                          <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                            {project.scopeOfWork.map((task, i) => (
                              <li key={i} className="pl-1">{task}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 pt-6 border-t border-border/40">
                          <h4 className="font-bold text-lg mb-4">Submit Your Bid</h4>
                          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Bid submitted successfully! (This is a mockup)'); }}>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor={`company-${project.id}`}>Company Name</Label>
                                <Input id={`company-${project.id}`} placeholder="Enter your company name" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor={`contact-${project.id}`}>Contact Person</Label>
                                <Input id={`contact-${project.id}`} placeholder="Name & Phone number" required />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`email-${project.id}`}>Email Address</Label>
                              <Input id={`email-${project.id}`} type="email" placeholder="vendor@example.com" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor={`bid-${project.id}`}>Your Bid Amount (₹)</Label>
                                <Input id={`bid-${project.id}`} type="number" placeholder="E.g. 800000" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor={`time-${project.id}`}>Estimated Time to Complete</Label>
                                <Input id={`time-${project.id}`} placeholder="E.g. 30 Days" required />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`notes-${project.id}`}>Additional Notes / Terms</Label>
                              <Textarea id={`notes-${project.id}`} placeholder="Any special conditions or materials to highlight..." />
                            </div>
                            <Button type="submit" className="w-full mt-4">Submit Official Bid</Button>
                          </form>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resident Suggestions & Issues */}
        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              Resident Suggestions & Issues
            </h2>
            <p className="text-muted-foreground mt-1">Top reported issues prioritized by community votes.</p>
          </div>

          <Card className="border-border/40 shadow-xl bg-card/40 backdrop-blur-sm">
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-[100px] text-center">Votes</TableHead>
                    <TableHead>Issue / Suggestion</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topIssues.sort((a, b) => b.votes - a.votes).map((issue, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="text-center">
                        <div className="flex flex-col items-center justify-center p-2 rounded-md bg-muted/50 border border-border">
                          <ArrowUpRight className="h-4 w-4 text-green-500 mb-1" />
                          <span className="font-bold text-lg leading-none">{issue.votes}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-base py-4">{issue.issue}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="outline" className={
                          issue.status === 'Resolved' ? 'border-green-500/50 text-green-600 bg-green-500/10' :
                          issue.status === 'Investigating' ? 'border-orange-500/50 text-orange-600 bg-orange-500/10' :
                          'border-primary/50 text-primary bg-primary/10'
                        }>
                          {issue.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
