# If You Have To Explain It Fast

Use this if someone asks you what your project is about and you need a quick answer.

## 15-second version

My project looks at whether coding workflows make apps easier to run by giving them broader permissions than they actually need.

## 30-second version

I compare two versions of the same small Node + Postgres setup. One version uses riskier permission choices like root behavior and `chmod 777`, while the other uses a dedicated non-root user and tighter permissions. This shows, in a simple way, what "least privilege erosion" looks like.

## 1-minute version

The principle of least privilege says software should get only the permissions it really needs. My project demonstrates what happens when a setup chooses convenience over security. I use a small containerized app example and compare a weaker version against a safer version. Then I score the risky patterns and show that the weaker version has a higher Privilege Gap.

## If the teacher asks "what did you actually build?"

Say:

> I built a minimal demonstration repo with two app configurations, a small dataset of two runs, and a report showing how broader permissions can be identified and compared.

## If the teacher asks "what are the risky things?"

Say:

> The main risky signs are root execution, no dedicated non-root user, and `chmod 777`.

## If the teacher asks "what is your main result?"

Say:

> The neutral setup had a higher risk score than the least-privilege setup.

## If the teacher asks "what are the limitations?"

Say:

> It is a small demonstration, not a large benchmark, so it shows the idea clearly but does not prove behavior across all agents.
