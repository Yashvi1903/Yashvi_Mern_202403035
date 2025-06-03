#include <bits/stdc++.h>
#include <algorithm>
#include <limits>

using namespace std;

#define Code ios_base::sync_with_stdio(false);
#define By cin.tie(NULL);
#define yashvi cout.tie(NULL);

#define ll long long
#define int ll
#define ld long double
#define ull unsigned long long
const ld pi = 3.141592653589793238;
const ll INF = LONG_LONG_MAX;
const ll MIN = LONG_LONG_MIN;
const ll mod = 1e9 + 7;

typedef pair<ll, ll> pairll;
typedef vector<ll> vec;
typedef vector<pairll> vecp;
typedef vector<string> vecs;
typedef unordered_map<ll, ll> ump;
typedef map<ll, ll> mp;
#define vv(T) vector<vector<T>>
#define maxhp(T) priority_queue<T>
#define minhp(T) priority_queue<T, vector<T>, greater<T>>
#define mem(n, i) memset(n, i, sizeof n)
#define p(A, B) pair<A, B>

ll gcd(ll a, ll b)
{
    if (b == 0)
        return a;
    return gcd(b, a % b);
}

ll lcm(ll a, ll b) { return (a / gcd(a, b) * b); }
ll moduloMultiplication(ll a, ll b, ll mod)
{
    ll res = 0;
    a %= mod;
    while (b)
    {
        if (b & 1)
            res = (res + a) % mod;
        b >>= 1;
    }
    return res;
}

ll powermod(ll x, ll y, ll p)
{
    ll res = 1;
    x = x % p;
    if (x == 0)
        return 0;
    while (y > 0)
    {
        if (y & 1)
            res = (res * x) % p;
        y = y >> 1;
        x = (x * x) % p;
    }
    return res;
}

bool sorta(const pair<int, int> &a, const pair<int, int> &b) { return (a.second < b.second); }
bool sortd(const pair<int, int> &a, const pair<int, int> &b) { return (a.second > b.second); }

bool isPrime(ll n)
{
    if (n <= 1)
        return false;
    if (n <= 3)
        return true;
    if (n % 2 == 0 || n % 3 == 0)
        return false;
    for (int i = 5; i * i <= n; i = i + 6)
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    return true;
}

//finding all primes
void sieve(int n)
{
    vector<bool> prime(n+1, true);
    prime[0] = prime[1] = false;
    for(int i = 2; i*i <= n; i++)
    {
        if(prime[i])
        {
            for(int j = i*i; j <= n; j += i)
            {
                prime[j] = false;
            }
        }
    }
}

bool isPowerOfTwo(int n)
{
    if (n == 0)
        return false;
    return (ceil(log2(n)) == floor(log2(n)));
}
bool isPerfectSquare(ll x)
{
    if (x >= 0)
    {
        ll sr = sqrt(x);
        return (sr * sr == x);
    }
    return false;
}

int modInverse(int A, int M)
{
    return powermod(A, M - 2, M);
}

#define f first
#define s second
#define mkp make_pair
#define pb push_back

#define vi vector<int>
#define vs vector<string>
#define vvi vector<vector<int>>
#define vvs vector<vector<string>>
#define vpi vector<pair<int, int>>

#define in1(A, a) A a; cin >> a;
#define in2(A, a, b) A a, b; cin >> a >> b;
#define in3(A, a, b, c) A a, b, c; cin >> a >> b >> c;
#define in4(A, a, b, c, d) A a, b, c, d; cin >> a >> b >> c >> d;
#define in5(A, a, b, c, d, e) A a, b, c, d, e; cin >> a >> b >> c >> d >> e;

#define forl(i, k, n) for (ll i = k; i < n; i++)
#define backl(i, k, n) for (ll i = n; i >= k; i--)
#define yes cout << "YES" << "\n";
#define minus1 cout << "-1" << endl;
#define no cout << "NO" << "\n";
#define it(v) v.begin(), v.end()
#define itr(v) v.rbegin(), v.rend()

#define out1(x) cout << (x) << " ";
#define out2(x, y) cout << (x) << " " << (y) << " ";
#define out3(x, y, z) cout << (x) << " " << (y) << " " << (z) << " ";

#define out1e(x) cout << (x) << endl;
#define out2e(x, y) cout << (x) << " " << (y) << endl;
#define out3e(x, y, z) cout << (x) << " " << (y) << " " << (z) << endl;
#define inv(v, n) vi v(n); for (int i = 0; i < n; i++) cin >> v[i];

// start your code
void solve()
{
    
}

signed main()
{
    Code By yashvi
    ll tt = 1;
    cin >> tt;
    while (tt--)
    {
        solve();
    }
}